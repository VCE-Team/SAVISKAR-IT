import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Countdown = ({ targetDate, eventTitle, location }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  useEffect(() => {
    const countdownTrigger = ScrollTrigger.create({
      trigger: "#countdown",
      start: "top 80%",
      end: "bottom 70%",
      onEnter: () => {
        gsap.to("#countdown", {
          opacity: 1,
          translateY: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#countdown", {
          opacity: 0,
          translateY: 28,
        });
      },
    });

    const textTrigger = ScrollTrigger.create({
      trigger: "#count",
      start: "top 85%",
      end: "top 20%",
      onEnter: () => {
        gsap.to("#countdown-text", {
          opacity: 1,
          translateY: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#countdown-text", {
          opacity: 0,
          translateY: 32,
        });
      },
    });

    return () => {
      countdownTrigger.kill();
      textTrigger.kill();
    };
  }, []);

  return (
    <div id='countdown'
      className="bg-black text-[#2DCDC4] rounded-xl p-6 md:px-24 md:py-10 bg-cover bg-center opacity-0 translate-y-28"
      style={{
        backgroundImage: "url('https://i.ibb.co/r3TYPYL/Hackathon-1.png)",
      }}
    >
      <h1 className='text-white'>Event Starts in</h1>
      <div className="flex space-x-10 mt-4 p-2 md:p-5">
        <div>
          <p className="text-sm text-[#2DCDC4]">Days</p>
          <p className="text-4xl md:text-7xl">{formatTime(timeLeft.days)}</p>
        </div>
        <div>
          <p className="text-sm text-[#2DCDC4]">Hours</p>
          <p className="text-4xl md:text-7xl">{formatTime(timeLeft.hours)}</p>
        </div>
        <div>
          <p className="text-sm text-[#2DCDC4]">Minutes</p>
          <p className="text-4xl md:text-7xl">{formatTime(timeLeft.minutes)}</p>
        </div>
        <div>
          <p className="text-sm text-[#2DCDC4]">Seconds</p>
          <p className="text-4xl md:text-7xl">{formatTime(timeLeft.seconds)}</p>
        </div>
      </div>
      <div className="flex space-x-4 justify-between">
        <div>
          <h1 className="text-sm mt-4 text-white">{eventTitle}</h1>
          <p className='text-white'>{location}</p>
        </div>
        <div>
          <button className="bg-[#aef5ed] text-black px-4 py-2 rounded-full mt-4 hover:bg-[#27FEE4]"> &rarr;</button>
        </div>
      </div>
    </div>
  );
};

// Usage example:
const App = () => {
  const targetDate = new Date("2024-11-13T10:00:00");

  return (
    <div id='count' className='bg-black py-10'>
      <h2 id='countdown-text'
      className="max-w-lg px-10 text-4xl text-white font-bold md:text-5xl md:px-28 opacity-0 translate-y-32">
          CountDown
          <span className="text-slate-400"></span>
        </h2>
    <div className="min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-black">
      <Countdown 
        targetDate={targetDate} 
        eventTitle="Saviskar Event" 
        location="Vardhaman college, IT" 
        />
      </div>
    </div>
  );
};

export default App;
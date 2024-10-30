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
          stagger: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to("#countdown", {
          opacity: 0,
          translateY: 28,
          stagger: 0.3,
        });
      },
    });

    const textTrigger = ScrollTrigger.create({
      trigger: "#count",
      start: "top 85%",
      end: "top 20%",
      onEnter: () => {
        gsap.to("#count-text", {
          opacity: 1,
          translateY: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to("#count-text", {
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
      className="bg-black text-white border rounded-xl p-5 md:px-24 md:py-10 bg-cover bg-center opacity-0 translate-y-28"
      // style={{
      //   backgroundImage: "url('https://images.unsplash.com/photo-1727121798392-73441c6b4a3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      // }}
    >
      <h1>Event Starts in</h1>
      <div className="flex space-x-7 mt-4 p-2 md:p-5">
        <div>
          <p className="text-sm text-[#7e7d7d]">Days</p>
          <p className="text-3xl md:text-7xl text-[#ec9d58]">{formatTime(timeLeft.days)}</p>
        </div>
        <div>
          <p className="text-sm text-[#7e7d7d]">Hours</p>
          <p className="text-3xl md:text-7xl text-[#ec9d58]">{formatTime(timeLeft.hours)}</p>
        </div>
        <div>
          <p className="text-sm text-[#7e7d7d]">Minutes</p>
          <p className="text-3xl md:text-7xl text-[#ec9d58]">{formatTime(timeLeft.minutes)}</p>
        </div>
        <div>
          <p className="text-sm text-[#7e7d7d]">Seconds</p>
          <p className="text-3xl md:text-7xl text-[#ec9d58]">{formatTime(timeLeft.seconds)}</p>
        </div>
      </div>
      <div className="flex space-x-2 justify-between">
        <div>
          <h1 className="text-sm mt-4">{eventTitle}</h1>
          <p className='text-sm'>{location}</p>
        </div>
        <div>
          <button className="bg-[#aef5ed] text-black px-3 py-2 rounded-full mt-4 hover:bg-[#27FEE4]"> &rarr;</button>
        </div>
      </div>
    </div>
  );
};

// Usage example:
const App = () => {
  const targetDate = new Date("2024-11-13T10:00:00");

  return (
    <div id='count' className='bg-black'>
      <h2 id='count-text' className="text-3xl font-bold md:text-5xl px-10 py-4 md:px-24 text-white opacity-0 translate-y-32">
      Unlock the Fun
                </h2>
                <h1 id='count-text' className="text-4xl  md:text-6xl px-10 font-bold md:px-24 text-transparent opacity-0 translate-y-32"
                                        style={{
                                            WebkitTextStrokeWidth: "2px",
                                            WebkitTextStrokeColor: "white",
                                        }}
                                        >Innovation—Time's Ticking!</h1>
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
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { div } from 'framer-motion/client';

const Page3 = () => {
  const videoRef = useRef(null);
  const svgRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const textTrigger = ScrollTrigger.create({
      trigger: "#launch",
      start: "20% 85%",
      end: "bottom 80%",
      onEnter: () => {
          gsap.to("#launch-text", {
              opacity: 1,
              translateY: 0,
              stagger: 0.3,  // Staggering the animations by 0.1 seconds
          });
      },
      onLeaveBack: () => {
          gsap.to("#launch-text", {
              opacity: 0,
              translateY: 32,
              stagger: 0.3,
          });
      },
  });
  
  return () => {
      textTrigger.kill();
  };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    const svg = svgRef.current;
    const text = textRef.current;

    // Hover Effect
    svg.addEventListener("mouseenter", () => {
      gsap.to(text, {
        opacity: 1,
        translateY: "0",
        duration: 0.5,
      });
    });

    svg.addEventListener("mouseleave", () => {
      gsap.to(text, {
        opacity: 0,
        translateY: "10px",
        duration: 0.5,
      });
    });

    // Click to play video
    svg.addEventListener("click", () => {
      video.play();
      gsap.to(video, {
        display: "block",
        duration: 2,
        ease: "power4.inOut",
        scaleX: 1,
        scaleY: 1,
        translateY: "-10vh",
        height: "105vh",
        width: "100%",
        borderRadius: 0,
        zIndex: 999,
      });
    });

    // Click on video to pause and hide it
    video.addEventListener("click", () => {
      video.pause();
      gsap.to(video, {
        scaleX: 0.8,
        scaleY: 0.05,
        display: "none",
        translateY: "17vh",
        duration: 0.1,
        borderRadius: 30,
      });
    });
  }, []);

  return (
<div id='launch' className='bg-black'>
<h2 id='launch-text' className="text-4xl font-bold md:text-5xl md:px-24 px-10 py-4 text-white">
          Watch Our
</h2>
  <h1 id='launch-text' className="text-5xl md:text-6xl md:px-24 px-10 font-bold text-transparent"
                        style={{
                            WebkitTextStrokeWidth: "2px",
                            WebkitTextStrokeColor: "white",
                        }}
                        >Launch Video</h1>

<div className="page3 h-[82vh] w-full bg-black relative bg-cover flex flex-col justify-center items-center mt-10 gap-2" style={{ backgroundImage: "url(https://i.ibb.co/1zRbZ9K/1.png)" }}>
    <video
  ref={videoRef}
  // src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"
  src="https://saviskarbucket.s3.eu-north-1.amazonaws.com/video.mp4"
  className="absolute object-cover rounded-[30px] h-[82vh] w-full hidden"
  style={{ transform: 'scaleX(0.8) scaleY(0.05) translateY(300vh)' }} // Adjust translateY value as needed
  autoPlay
  loop
/>
      <div className="page3-svg" ref={svgRef}>
        <svg fill="none" viewBox="0 0 210 210" className="bg-black  h-20 w-20 md:h-[10.7vw] md:w-[10.7vw] rounded-full " >
          <rect width="210" height="210" fill="#fff" rx="105"></rect>
          <path fill="#111" d="m125 105-30 17.321V87.68L125 105Z"></path>
        </svg>
      </div>
      <div className="page3-text bg-white text-black px-2 rounded-[20px] text-center font-light opacity-0 translate-y-[10px] absolute mt-[13.4vw]" ref={textRef}>
        <h5 className="font-medium md:p-1 text-sm md:text-medium">WATCH SHOWREEL</h5>
      </div>
    </div>
  </div>
  );
};

export default Page3;
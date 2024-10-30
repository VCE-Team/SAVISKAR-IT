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
  src="https://saviskarbucket.s3.eu-north-1.amazonaws.com/video.mp4?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiA3Q7WdfQxKAr8SW2i0aNWWuIfij1SUKiMuXIwDEQwz5AIhAPvlEtL2aHXhziIS9kdsRfUZzSwlVEppaOlP%2Ffd%2FrUk4KscDCHAQABoMNTY1MzkzMDI4Mjc4IgzLoz8K0s6b%2BVBFfUkqpANUXr4MuDbpgoVF%2B1avBf9ZqUrwyBsYJB9KqAsFh2W8boMNwshji8FwbVHZqAddU7CP6hBCzHm%2FkoW95C%2FeGbUqdhAgIa9OrB0oZq0JM20uLjFn9m8Y9q2AP%2F0dgxfuHraMUpC3Bdi4Iiw2%2B14q0HjK58Es6lZDVnrvTgTHfyjK7Sf2dQ4NNobPbsU6FboVUu7j9NdaCag9VvcjqsNlzvyGtZWT4Z9C4WfB6Np1TsBGTgMzutQdkiHLrkkZO%2BVca%2F9pngr9Mhtpxh6wfVb2nq2ejleaUvdqf3zlJQEWy03GcEnSpaU8ZNt8b7PZ8hOag2mFYwWZ0Mk%2BmlkEgxaLdwXseMxgTpHEFLvR2Z9h1GAS21Z%2FQGraahw%2BDtwIkiyNoa8mkZa2DT%2FZRdflrxvDh0btWZdY%2BKii4swwnGWBe9oYkfAbsQxLqG8bjBFqFiL8vJo7mgF4duIxZUGmTL5YcvbsQ39Hlz1mwwT%2FQzNV7cEGKjPv5VF2UOODkPKrq9SIkGzj6mKQoGxmr5dTlg5dLyhvZ%2B418xsQpiyOfkUf93BL5NAc7e0wtqCHuQY65AKX%2FekW75Ej7JpvpsIYsdLLd83m8cB%2B63Uv2xpzdEcrReVakngP9G4aRMEXAslAs9ddvHxe3xnVm0zdknX2HKHz7h86aH%2BV6QNUDEO5ZAXUlIovB7IxxQGXO3KxtjyVJXwcByJT8StAk1eDnbrYBCvMPtDc9P7E1awiH1u0kcsO8%2BCfcJd8IfI2GPbDETb2gzEyPrGw4kUMKQgKrgSs2YIcq%2FC8ce4AqNZB%2FUiX7a9GRFeVwtv11di%2FsXjBxqz9aYM%2FOqbDFj3Sczd3PxwJbrTObSyg4yLIY4cnpDyNWqXhZiHTqgh7ETUgGpbx5DPCEFkyzjYqk%2Fv5vzlDnCOA4VlNEbIW6dP7S%2ByIrAZEXI6QwPeFiQRwyWSxW1Y3PZpsjFEvx928JfchfArkm91hRNEQbBKrcG5QT00w2321IAstMtLaS1yTHicW1FKYPKQNxtAPJAw115oc%2Bt62QsiJrv0hwin2bA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAYHJAM6S3DQ4KD3Y7%2F20241030%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241030T065545Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=9ee4ab85b94643d309273a5efb4fea9460306f126755d96267710d4a5240cc8a"
  className="absolute object-cover rounded-[30px] h-[82vh] w-full hidden"
  style={{ transform: 'scaleX(0.8) scaleY(0.05) translateY(300vh)' }} // Adjust translateY value as needed
  autoPlay
  loop
  muted
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
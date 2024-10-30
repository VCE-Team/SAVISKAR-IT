import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sponsers = () => {
  useEffect(() => {
    // Text trigger
    const textTrigger = ScrollTrigger.create({
      trigger: "#sponsers-text",
      start: "top 90%",
      end: "bottom 70%",
      onEnter: () => {
        gsap.to("#sponsers-text", {
          opacity: 1,
          translateY: 0,
          duration: 0.3,
          stagger: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.to("#sponsers-text", {
          opacity: 0,
          translateY: 28,
          stagger: 0.3,
        });
      },
    });

    // Batch trigger for sponsor cards
    ScrollTrigger.batch(".sponser-card", {
      start: "top 85%",
      end: "top 20%",
      onEnter: (batch) => 
        gsap.to(batch, {
          opacity: 1,
          translateY: 0,
          stagger: 0.2,
          duration: 1,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          translateY: 32,
          stagger: 0.,
        }),
    });

    return () => {
      // Clean up all ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="sponsers" className="bg-black px-4 py-12">
      <h2 id='sponsers-text' className="text-4xl font-bold md:text-5xl px-2 py-4 md:px-24 text-white opacity-0 translate-y-32">
                        Sponsers
                </h2>
                <h1 id='sponsers-text' className="text-5xl md:text-6xl px-2 md:px-24 font-bold text-transparent opacity-0 translate-y-32"
                                        style={{
                                            WebkitTextStrokeWidth: "2px",
                                            WebkitTextStrokeColor: "white",
                                        }}
                                        >Of Our Event</h1>
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-wrap gap-8 p-2 place-content-center">
          <TiltCard image="https://media.licdn.com/dms/image/v2/D560BAQEaSbVnaT-lkQ/company-logo_200_200/company-logo_200_200/0/1681840496553?e=1738195200&v=beta&t=RB2M1SBIkHKiXXVlWJn5BVEpDjav6gkMW-q3hI1nwRk" title="Sponser 1" />
          <TiltCard image="" title="Sponser 2" />
          <TiltCard image="" title="Sponsor 3" />
          <TiltCard image="" title="Sponsor 4" />
        </div>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ image,title }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="sponser-card relative h-96 w-72 rounded-xl bg-gradient-to-br from-[#fe9e62] to-[#9d4900] opacity-0 translate-y-32"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >

{!image ? (
        <>
          <FiMousePointer
            style={{
              transform: "translateZ(75px)",
            }}
            className="mx-auto text-4xl"
          />
          <h1 className="text-center text-xl mt-2">{title}</h1>
        </>
      ) : (
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      )}
      </div>
    </motion.div>
  );
};

export default Sponsers;
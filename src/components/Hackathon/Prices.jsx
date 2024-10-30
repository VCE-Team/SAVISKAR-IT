import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Prices = () => {
  // useEffect(() => {
  //   // Text trigger
  //   const textTrigger = ScrollTrigger.create({
  //     trigger: "#sponsers-text",
  //     start: "top 80%",
  //     end: "bottom 70%",
  //     onEnter: () => {
  //       gsap.to("#sponsers-text", {
  //         opacity: 1,
  //         translateY: 0,
  //         duration: 0.5,
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to("#sponsers-text", {
  //         opacity: 0,
  //         translateY: 28,
  //       });
  //     },
  //   });

  //   // Batch trigger for sponsor cards
  //   ScrollTrigger.batch(".sponser-card", {
  //     start: "top 85%",
  //     end: "top 20%",
  //     onEnter: (batch) => 
  //       gsap.to(batch, {
  //         opacity: 1,
  //         translateY: 0,
  //         stagger: 0.5,
  //         duration: 1,
  //       }),
  //     onLeaveBack: (batch) =>
  //       gsap.to(batch, {
  //         opacity: 0,
  //         translateY: 32,
  //         stagger: 0.5,
  //       }),
  //   });

  //   return () => {
  //     // Clean up all ScrollTriggers
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div id="sponsers" className="bg-black px-4 py-12">
      <h2
        id="sponsers-text"
        className="text-4xl text-white font-bold md:text-5xl md:px-28"
      >
        Exciting Prizes
      </h2>
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-wrap gap-8 p-2 place-content-center">
          <TiltCard title="Prizes 1" />
          <TiltCard title="Prizes 2" />
          <TiltCard title="Prizes 3" />
          <TiltCard title="Prizes 4" />
        </div>
      </div>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title }) => {
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
      className="sponser-card relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default Prices;
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
  const textTrigger = ScrollTrigger.create({
    trigger: "#gallery",
    start: "20% 85%",
    end: "bottom 80%",
    onEnter: () => {
        gsap.to("#gallery-text", {
            opacity: 1,
            translateY: 0,
            stagger: 0.3,  // Staggering the animations by 0.1 seconds
        });
    },
    onLeaveBack: () => {
        gsap.to("#gallery-text", {
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

  return (
    <div id="gallery" className="pt-16 bg-black"> {/* Adds space at the top for another title */}
      <h2 id='gallery-text' className="text-4xl font-bold md:text-5xl px-2 py-4 md:px-24 text-white opacity-0 translate-y-32">
                        Gallery
                </h2>
                <h1 id='gallery-text' className="text-5xl md:text-6xl px-2 md:px-24 font-bold text-transparent opacity-0 translate-y-32"
                                        style={{
                                            WebkitTextStrokeWidth: "2px",
                                            WebkitTextStrokeColor: "white",
                                        }}
                                        >Collection</h1>
      <div
        className="relative h-[600px] w-full grid place-items-center bg-black overflow-hidden"
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        // }}
      >
        <h2 className="absolute top-6 text-3xl font-bold text-white">
          Swipe Through Our
          <span className="text-slate-400"> Collection</span>
        </h2>

        {cards.map((card, index) => (
          <Card
            key={card.id}
            {...card}
            cards={cards}
            setCards={setCards}
            isFront={index === cards.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ id, url, setCards, cards, isFront }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((v) => v.id !== id));
    } else {
      x.set(0);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  return (
    <motion.img
      src={url}
      alt="Swipeable card"
      className={`${
        isFullScreen
          ? "fixed inset-0 h-[80vh] w-[90vw] m-auto object-contain"
          : "absolute h-96 w-72 md:w-96 object-cover"
      } origin-bottom rounded-lg bg-black cursor-pointer`}
      style={{
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFullScreen ? 1 : isFront ? 1 : 0.98,
      }}
      drag={isFront && !isFullScreen ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onClick={toggleFullScreen}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

const cardData = [
  { id: 8, url: "https://i.ibb.co/rcjV2ZF/3.jpg" },
  { id: 6, url: "https://i.ibb.co/mbmd3ZL/7.jpg" },
  { id: 4, url: "https://i.ibb.co/YbL46pj/4.jpg" },
  { id: 7, url: "https://i.ibb.co/8Yy2ptH/5.jpg" },
  { id: 1, url: "https://i.ibb.co/5nByCrJ/8.jpg" },
  { id: 5, url: "https://i.ibb.co/tKTLYkP/6.jpg" },
  { id: 3, url: "https://i.ibb.co/9NvBX7f/2.jpg" },
  { id: 2, url: "https://i.ibb.co/zFrtkcw/1.jpg" },
];
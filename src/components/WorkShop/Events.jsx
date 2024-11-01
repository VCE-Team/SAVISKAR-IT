import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Events = () => {
  return (
    <div className="bg-black text-white " style={{ backgroundImage: 'url(https://i.ibb.co/zPj1s3d/Home-page-Workshop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Craft. Create. Innovate."
        heading="Unleashing Web Brilliance"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Mastering Web Design Fundamentals
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Explore the Art of Responsive, Engaging Web Pages. This workshop guides participants through the essentials of web development, covering core technologies like HTML, CSS, and JavaScript. Attendees will learn to create responsive layouts, incorporate interactive elements, and follow modern design standards to build professional-looking websites.
            </p>
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Step Into New Realities"
        heading="AV/VR: The Immersive Experience"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Augmented & Virtual Reality Workshop
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Discover the Future of Interactive Tech. This AV/VR workshop explores the immersive world of augmented and virtual reality, covering foundational concepts, tools, and techniques. Participants will learn to build virtual environments, implement AR overlays, and understand the potential applications in gaming, education, and training.
            </p>
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Efficiency at its Peak"
        heading="Automate to Innovate"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Automation: Transforming Tomorrow
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Streamline Processes with Intelligent Automation. Focused on the practical use of automation in industries, this workshop covers a range of tools and methods for streamlining tasks. Participants will learn about scripting, robotic process automation (RPA), and AI-driven solutions that increase efficiency.
            </p>
          </div>
        </div>
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

export default Events;

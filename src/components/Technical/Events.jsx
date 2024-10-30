import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Events = () => {
  return (
    <div id="events-tech" className="bg-black" style={{ backgroundImage: 'url(https://i.ibb.co/zPj1s3d/Home-page-Workshop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-4xl text-white">
          Events
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust the transform range to slow down the scroll speed
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-99%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] px-8 md:px-40">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-28">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group flex flex-col md:flex-row relative p-3 w-[350px] md:h-[600px] md:w-[1100px] overflow-hidden p-5 px-6 bg-neutral-200">
      {/* Text Container */}
      <div className="flex-1 h-1/2 md:h-full md:w-1/2 flex items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-5xl justify-evenly pb-5">{card.title}</h1>
          <p className="md:text-3xl">{card.description}</p>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
        <img src={card.url} alt={card.title} className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default Events;

const cards = [
  {
    url: "https://images.unsplash.com/photo-1607706009771-de8808640bcf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coding Mania",
    description: "Gear up for an intense coding showdown where algorithms meet ingenuity! Participants dive into complex challenges, optimizing solutions and demonstrating their problem-solving prowess. Categories are available for coders at all skill levels—whether you're a beginner, intermediate, or advanced, there’s a challenge waiting for you!",
    id: 1,
  },
  {
    url: "https://hitam.org/wp-content/uploads/2022/07/project-expo-Desk.jpg",
    title: "Project Expo",
    description: "Unleash your creativity at the Project Expo! This is your stage to present innovative tech projects, showcase new ideas, and get feedback from peers and experts alike. Stand out with your solutions, gain recognition, and inspire others with your work!",
    id: 2,
  },
  {
    url: "https://i.ibb.co/gmJw7ry/Whats-App-Image-2024-10-30-at-14-29-58-7b0c48bb.jpg",
    title: "Capture the Flag",
    description: "Join the hunt in this thrilling cybersecurity challenge! Test your cryptography and hacking skills as you unravel digital puzzles and uncover hidden 'flags' across the web. Perfect for aspiring cybersecurity pros and codebreakers!",
    id: 3,
  },
  {
    url: "https://i.ibb.co/c86scdB/Whats-App-Image-2024-10-30-at-14-36-09-f7c0a18d.jpg",
    title: "Bughunt",
    description: "Become the ultimate bug-slayer in this web-based scavenger hunt! Trace clues, decode puzzles, and test your debugging skills in a series of cryptic URLs. Ideal for puzzle solvers and keen-eyed explorers of the digital realm!",
    id: 4,
  },
  {
    url: "https://i.ibb.co/2tc95sH/Whats-App-Image-2024-10-30-at-14-35-18-d5b8bed9.jpg",
    title: "Code Quiz",
    description: "Flex your coding knowledge in this dynamic Code Quiz! Answer quick-fire questions, solve code snippets, and climb the leaderboard. With diverse topics and real-time challenges, this quiz promises to sharpen your skills and keep you on your toes!",
    id: 5,
  }
];

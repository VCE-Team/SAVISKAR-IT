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
    <section ref={targetRef} className="relative h-[300vh] px-12 md:px-44">
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
    <div className="group flex flex-col md:flex-row relative h-[450px] w-[350px] md:h-[600px] md:w-[1100px] overflow-hidden p-5 px-6 bg-neutral-200">
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
    url: "https://i.ibb.co/Dfqzf9t/lan-transformed.jpg",
    title: "LAN Gaming Tournament",
    description: "A LAN-based gaming competition featuring top multiplayer games. Teams compete in real-time to win the ultimate gaming crown. Perfect for gamers of all skill levels!",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Poster Presentation",
    description: "A platform for participants to showcase innovative ideas and solutions through posters. Engages the audience with visual storytelling and persuasive insights.",
    id: 2,
  },
  {
    url: "https://www.klnce.edu/echelon2k17/assets/images/treasure.jpg",
    title: "Treasure Hunt",
    description: "An adventurous hunt across the venue, filled with challenging clues and team-building tasks. Perfect for thrill-seekers and puzzle lovers.",
    id: 3,
  },
  {
    url: "https://i.ibb.co/HtLv0Ds/image.png",
    title: "Wellness",
    description: "Workshops focused on mental and physical well-being, offering practices and techniques to enhance overall health and mindfulness.",
    id: 4,
  }
];
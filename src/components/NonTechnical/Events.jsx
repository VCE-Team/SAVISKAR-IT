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
    url: "https://i.ibb.co/Dfqzf9t/lan-transformed.jpg",
    title: "LAN Gaming Tournament",
    description: "Step into the arena of fierce competition! Join the LAN Gaming Tournament, where teams battle it out in thrilling multiplayer games for ultimate glory. Whether you’re a seasoned pro or a casual gamer, this event promises excitement and camaraderie!",
    id: 1,
  },
  {
    url: "https://i.ibb.co/J34xjmp/Whats-App-Image-2024-10-30-at-14-31-41-748c68f7.jpg",
    title: "Reel Time Rumble",
    description: "Unleash your creativity at Reel Time Rumble! This is your chance to present innovative ideas through engaging posters, captivating the audience with visual storytelling and impactful insights. Stand out, inspire, and make your mark!",
    id: 2,
  },
  {
    url: "https://www.klnce.edu/echelon2k17/assets/images/treasure.jpg",
    title: "Treasure Hunt",
    description: "Embark on an exhilarating adventure with our Treasure Hunt! Navigate through the venue, solve challenging clues, and complete team-building tasks. Perfect for thrill-seekers and puzzle enthusiasts looking to test their wits and teamwork!",
    id: 3,
  },
  {
    url: "https://i.ibb.co/7Y1PqY8/Whats-App-Image-2024-10-30-at-14-37-31-5e987982.jpg",
    title: "Live PhotoShop",
    description: "Dive into the world of creativity with Live PhotoShop! Participate in dynamic workshops that enhance your digital art skills while focusing on mental and physical well-being. Discover techniques that foster mindfulness and inspire your artistic journey.",
    id: 4,
  }
];

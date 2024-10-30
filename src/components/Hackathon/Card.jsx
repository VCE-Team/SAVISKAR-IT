import React, { useState } from 'react';
import bgCard from '../assets/img/bg-card.png';

const Card = ({ image, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-gray-600">{price}</span>
      </div>
      <img src={bgCard} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-30" />

      {/* Hover div */}
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <p className="hover-name text-xl">John Doe</p>
          <p className="hover-designation">Web Developer</p>
          <div className="hover-socials flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook">
              <i className="ri-facebook-line text-white"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="ri-twitter-line text-white"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="ri-linkedin-line text-white"></i>
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export default Card;
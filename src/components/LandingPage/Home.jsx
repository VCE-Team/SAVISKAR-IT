import React from 'react';
import AnimatedGradientText from "../AnimatedGradientText/AnimatedGradientText";
import { RainbowButtonDemo } from "../RainbowButton/RainbowButtonDemo";

// Memoized background video component to avoid unnecessary re-renders
const BackgroundVideo = React.memo(() => (
  <video
    className="absolute inset-0 w-full h-full object-cover"
    muted
    loop
    autoPlay
    style={{ willChange: "transform, opacity" }} // Optimizes video for smoother scrolling
  >
    <source
      src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/line-waves.webm?t=2024-03-19T22%3A09%3A07.266Z"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
));

const Home = () => {
  return (
    <div
      id="Home"
      className="relative bg-gradient-to-b bg-black h-screen text-white"
    >
      {/* Header */}
      <header className="relative z-10">
        <div className='p-4 md:p-7'>
          <div className='flex justify-between'>
            <div>
              <img
                className="w-auto h-10"
                src="https://i.ibb.co/qrhhX9Y/logo-semi.png"
                alt="Logo"
              />
            </div>
            <div className='flex ml-3 gap-10'>
              <a href="" className='font-neue hidden md:block'>Home</a>
              <a href="#event" className='font-neue hidden md:block'>Events</a>
              <a href="#sponsers" className='font-neue hidden md:block'>Sponsers</a>
              <a href="#footer1" className='font-neue hidden md:block'>Contact Us</a>
            </div>
            <div className='font-neue'>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSenj8k9HwvAsU2UPAhGg7-C-k_L1EnxeXyFwdXrBMKdX0BBTQ/viewform?usp=sf_link">
                <RainbowButtonDemo />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Background Video */}
      <div className="relative h-screen overflow-hidden z-0">
        <BackgroundVideo /> {/* Memoized component to avoid re-renders */}

        {/* Main Content Section */}
        <section className="relative flex justify-center items-center h-screen bg-black bg-opacity-60 z-10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex justify-center flex-col items-center">
                <AnimatedGradientText className="inline-flex cursor-pointer fade-in-text animated-gradient-text items-center rounded-lg bg-muted md:px-6 md:text-10xl font-bold">
                  <React.Fragment key=".0">
                    <span id='home-text' className="font-neue mx-2 text-[20vw] md:text-[20vh]">Saviskar</span>
                  </React.Fragment>
                </AnimatedGradientText>
                <AnimatedGradientText className="text-8xl inline-flex cursor-pointer fade-in-text animated-gradient-text items-center rounded-lg bg-muted md:px-6 md:text-10xl font-bold">
                  <React.Fragment key=".0">
                    <span className="font-neue mx-2">2k24</span>
                  </React.Fragment>
                </AnimatedGradientText>
                <p className="font-neue md:mt-8 mt-8 text-2xl md:px-20 animate-para-text text-white sm:text-xl">
                  Create &nbsp; Innovate &nbsp; Celebrate
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

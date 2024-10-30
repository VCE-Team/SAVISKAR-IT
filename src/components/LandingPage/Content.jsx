import React from 'react';

export default function Content() {
  return (
    <div className='bg-[#bbbbbb] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className='flex flex-col justify-between gap-10  overflow-hidden'>
      <h1 className='text-[14vw] leading-[0.8] mt-10'>Saviskar 2K24</h1>
      <p>© Copyright</p>
    </div>
  );
}

const Nav = () => {
  return (
    <div className='flex shrink-0 gap-20 mt-20 items-end'>
      <div className='flex flex-col text-2xl gap-2'>
        <a href="#Home"><p>Home</p></a>
        <a href="#event"><p>Events</p></a>
        <a href="#gallery"><p>Gallery</p></a>
        <p>Contact Us</p>
      </div>
      <div>
      <div className='flex h-16 w-20 gap-5 md:gap-10 md:mr-10 rounded-2xl'>
        <img src="https://i.ibb.co/JBqm08X/SAVE-20241030-133511.jpg" alt="" />
        <img src="https://i.ibb.co/2MCnMX5/SAVE-20241030-133521.jpg" alt="" />
        <img src="https://i.ibb.co/PZtn50q/SAVE-20241030-133516.jpg" alt="" />
      </div>
      </div>
    </div>
  );
}

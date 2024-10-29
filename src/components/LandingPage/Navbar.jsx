import React from 'react';
import { RainbowButtonDemo } from "../RainbowButton/RainbowButtonDemo";
const Navbar = () => {

    window.addEventListener("load", () => {
        var tl = gsap.timeline();
      
        // Fade in the page1 element
        tl.from(".page1", {
          opacity: 0,
          duration: 0.3,
        })
        // Scale and translate animation for #page1
});
  return (
    <nav className='w-[100%] bg-[#040404] m-auto py-3 relative'>
        <div className='flex justify-between h-[100%] px-3 py-2'>
            <div className='flex items-center'>
                {/* <img src='https://www.flaticon.com/svg/vstatic/svg/3176/3176272.svg?token=exp=1632300412~hmac=5b6c7c7c6e3b6e5f4b4b3e7b9b4e6e7e' alt='logo' className='h-10 w-10'/> */}
                <h1 className='text-white text-2xl px-3 tracking-tighter'>Saviskar</h1>
            </div>
        <div className='rounded-full py-[2px] hidden md:block'>
            <ul className='flex items-center gap-5 px-2'>
                <li className='text-white px-3 hover:bg-[#4d6e9c] rounded-full p-1'>Home</li>
                <li className='text-white px-3 hover:bg-[#4d6e9c] rounded-full p-1'>About</li>
                <li className='text-white px-3 hover:bg-[#4d6e9c] rounded-full p-1'>Services</li>
                <li className='text-white px-3 hover:bg-[#4d6e9c] rounded-full p-1'>Contact</li>
            </ul>
        </div>

        <div className='rounded-full px-3 py-1 border '>
        {/* <button className='rounded-full text-white text-sm'>Register</button> */}
        <RainbowButtonDemo />
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
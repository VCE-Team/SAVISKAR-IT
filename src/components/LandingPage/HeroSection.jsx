// import React, { useEffect } from 'react';

// const HeroSection = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
//     script.type = "module";
//     document.body.appendChild(script);
//   }, []);

//   return (
//     <div className='h-[88vh] w-[95%] bg-[#000000] m-auto rounded-3xl mt-3 flex justify-evenly items-center'>
//       <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
//         {/* textContent */}
//         <div className='space-y-8 flex flex-col justify-center items-center'>
//         <h1 className='text-white text-4xl'>Hunt Your Best Events</h1>
//         <p className='text-white'>
//           Embark on the Quest for the Ultimate
//           Celebration: Join us as we go Hunting for
//           the Perfect Bash!
//         </p>
//           {/* <img src="https://images.unsplash.com/photo-1572575156811-2ae050d748d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  */}
//           {/* alt="" className='h-36 w-80' /> */}
//           <div className='flex gap-5'>
//          <h1 className='mt-3 text-white'>Find the events here</h1>
//          <button className='rounded-full px-3 py-3 text-sm text-black bg-[#27FEE4]'>Events</button>
//           </div>
//         </div>

//        {/* model */}
//        <div className='flex justify-center items-center'>
//         <div className='h-[40vh] md:h-[53vh] md:ml-10'>
//         <spline-viewer loading-anim-type="spinner-small-light" url="https://prod.spline.design/huKnd-gcBmz-DHXO/scene.splinecode"></spline-viewer>
//         {/* <div className='h-16 w-[85%] md:w-[40%]  ml-7 -mt-14 bg-black z-20 absolute overflow-hidden'></div> */}
//         </div>
//        </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;







// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';

// const HeroSection = () => {
//   const containerRef = useRef(null);
//   const maskOverlayRef = useRef(null);
//   const [circleSize, setCircleSize] = useState(30); // initial circle size
//   const defaultCircleSize = 30; // default size
//   const enlargedCircleSize = 120; // size when moving fast
//   const [timeoutId, setTimeoutId] = useState(null); // state to hold timeout ID
//   const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 }); // state for last mouse position

//   useEffect(() => {
//     const container = containerRef.current;
//     const maskOverlay = maskOverlayRef.current;
//     let lastMouseX = 0;
//     let lastMouseY = 0;
//     const speedThreshold = 200; // adjust for sensitivity of enlargement

//     const handleMouseMove = (e) => {
//       const rect = container.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       // Calculate speed of mouse movement
//       const dx = Math.abs(e.clientX - lastMouseX);
//       const dy = Math.abs(e.clientY - lastMouseY);
//       const speed = Math.sqrt(dx * dx + dy * dy);

//       // Update circle size based on speed
//       const newSize = speed > speedThreshold ? enlargedCircleSize : defaultCircleSize;
//       if (newSize !== circleSize) {
//         setCircleSize(newSize);
//       }

//       // Update last mouse position
//       lastMouseX = e.clientX;
//       lastMouseY = e.clientY;

//       // Apply the circle mask with dynamic size
//       const maskImage = `radial-gradient(circle ${newSize}px at ${x}px ${y}px, transparent 98%, rgba(0, 0, 0, 1) 100%)`;
//       gsap.to(maskOverlay, { duration: 0.5, css: { maskImage, WebkitMaskImage: maskImage } });

//       // Clear existing timeout
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }

//       // Set a new timeout to reset circle size after 200ms of inactivity
//       const newTimeoutId = setTimeout(() => {
//         setCircleSize(defaultCircleSize);
//         gsap.to(maskOverlay, { duration: 0.5, css: { maskImage: `radial-gradient(circle ${defaultCircleSize}px at ${lastMousePosition.x}px ${lastMousePosition.y}px, transparent 98%, rgba(0, 0, 0, 1) 100%)` } });
//       }, 200); // Adjust the timeout duration as needed

//       // Store the timeout ID and last mouse position
//       setTimeoutId(newTimeoutId);
//       setLastMousePosition({ x, y }); // Update last mouse position
//     };

//     container.addEventListener("mousemove", handleMouseMove);

//     // Cleanup function
//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       // Clear the timeout if the component unmounts
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     };
//   }, [circleSize, timeoutId]);
//   gsap.to('#hero',{
//     duration: 1,
//     y: 20,
//     yoyo: true,
//     repeat: -1,
//     ease: 'power1'

//   })
//   // window.addEventListener("load", () => {
//   //   gsap.timeline()
//   //     .fromTo(
//   //       "#page1",
//   //       { 
//   //         opacity: 0,
//   //         scaleX: 0.7, 
//   //         scaleY: 0.1, 
//   //         y: 200, // Starts slightly down
//   //         borderRadius: "40px",
//   //       },
//   //       { 
//   //         opacity: 1,
//   //         scaleX: 1, 
//   //         scaleY: 1, 
//   //         y: 0, // Ends at original position
//   //         duration: 1.5, 
//   //         ease: "circ.out",
//   //         borderRadius: "0px",
//   //         clearProps: "all" // Removes inline styles after animation
//   //       }
//   //     );
//   // });
//   return (
//     <div
//       ref={containerRef}
//       id='page1'
//       className="relative h-[88vh] w-[95%] m-auto mt-3 flex justify-center items-center overflow-hidden"
//     >
//       {/* Background Video */}
//       {/* <video
//         className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//         autoPlay
//         loop
//         muted
//       > */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         muted
//         loop
//         autoPlay
//       >
//         <source src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/line-waves.webm?t=2024-03-19T22%3A09%3A07.266Z" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Mask Overlay */}
//       {/* <div
//         ref={maskOverlayRef}
//         className="absolute inset-0 bg-[#000000e6] pointer-events-none"
//       /> */}

//       {/* Main Content */}
//       <div className='absolute flex flex-col md:flex-row justify-center items-center z-10 space-y-8'>
//         <div className='text-center text-white'>
//           <h1 id='hero'  className='text-4xl font-bold md:text-6xl'>Hunt Your Best Events</h1>
//           <p className='mt-4'>
//             Embark on the Quest for the Ultimate Celebration: <br />
//             Join us as we go Hunting for the Perfect Bash!
//           </p>
//           <div className='flex gap-5 mt-6 justify-center items-center'>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


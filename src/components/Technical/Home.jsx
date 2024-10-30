import React from 'react'
import { ShimmerButtonDemo } from '../ShimmerButton/ShimmerButtonDemo'

const Home = () => {
  return (
    <div id='Home' className="bg-gradient-to-b bg-black h-screen text-white" style={{ backgroundImage: 'url(https://i.ibb.co/zPj1s3d/Home-page-Workshop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-8" src="https://i.ibb.co/KhfVyHB/logo-semi.png" alt="" />
              </a>
            </div>

            <button type="button" className="hidden inline-flex p-1 text-white transition-all duration-200 border border-white lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#events-tech" title="" className="text-base hidden md:block font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Events </a>
              <a href="#footer-tech" title="" className="text-base hidden md:block font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Contact us </a>
              <div className="w-px h-5 bg-black/20"></div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSenj8k9HwvAsU2UPAhGg7-C-k_L1EnxeXyFwdXrBMKdX0BBTQ/viewform" title="" className="inline-flex items-center justify-center text-base font-semibold text-white  hover:bg-black hover:text-white transition-all duration-200 focus:bg-black rounded-xl focus:text-white" role="button"> <ShimmerButtonDemo/> </a>
            </div>
          </div>
        </div>
      </header>

      <section className="md:py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl mt-10 font-bold text-white sm:text-6xl lg:text-7xl">
                Technical <br />
                <div className="relative inline-flex">
                  <span className="border-b-[30px] border-[#931569]"></span>
                  <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">Events</h1>
                </div>
              </h1>
              <p className="md:mt-8 mt-8 text-base text-white sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
              <div className="md:mt-10 sm:flex sm:items-center sm:space-x-8">
                <a href="#Events" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                  Start exploring 
                  <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#931569" stroke="#931569" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center p-4 sm:p-6 md:p-0">
  <img 
    className="h-[50vh] w-full sm:h-[60vh] md:h-[80vh] max-w-full object-cover" 
    src="https://i.ibb.co/X2WY2Hr/Event-Pages.png" 
    alt="Event Page" 
  />
</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
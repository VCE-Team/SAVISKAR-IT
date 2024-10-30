import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#bbbbbb] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Saviskar 2K24</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 mt-20'>
            <div className='flex flex-col text-2xl gap-2'>
                <a href="#Home"><p>Home</p></a>
                <a href="#events"><p>Events</p></a>
                <p>Contact Us</p>
            </div>
        </div>
    )
}
import React from 'react'

const Participate = () => {
  return (
    <div className='bg-black min-h-[70vh]'>
        <div className='p-10 px-16'>
            <h1 className='text-white text-5xl'>
            Who Can
            </h1>

        <h1 className="text-6xl font-bold text-transparent "
                        style={{
                            WebkitTextStrokeWidth: "2px",
                            WebkitTextStrokeColor: "white",
                        }}
                        >
                        Participate
            </h1>
        </div>
        <div className='p-10 md:px-32'>
            <div className='border p-5 border-3 rounded-2xl'>
            <p className='md:text-3xl text-xl text-white'>Saviskar 2K24 is open to all B.Tech students who are ready to take on the challenge! Whether you’re in your first year or final year, if you’re passionate about technology and eager to innovate, you’re invited to join us.
            </p>
            <br />
            <p className='md:text-3xl text-xl text-white'>Bring your coding skills, creativity, and problem-solving mindset and get ready to collaborate with fellow students, develop groundbreaking solutions, and make an impact</p>
            </div>
        </div>
    </div>
  )
}

export default Participate
import React from "react";
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const EventList = () => {
    const navigate = useNavigate();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Create a scroll trigger for the event cards
        const eventdownTrigger = ScrollTrigger.create({
            trigger: "#event",
            start: "top 55%",
            end: "30% 50%",
            onEnter: () => {
                gsap.to(".event-card", {
                    opacity: 1,
                    translateY: 0, // Staggering the animations by 0.1 seconds
                });
            },
            onLeaveBack: () => {
                gsap.to(".event-card", {
                    opacity: 0,
                    translateY: 52,
                });
            },
        });

        const textTrigger = ScrollTrigger.create({
            trigger: "#event",
            start: "20% 85%",
            end: "bottom 80%",
            onEnter: () => {
                gsap.to("#event-text", {
                    opacity: 1,
                    translateY: 0,
                });
            },
            onLeaveBack: () => {
                gsap.to("#event-text", {
                    opacity: 0,
                    translateY: 32,
                });
            },
        });

        return () => {
            eventdownTrigger.kill();
            textTrigger.kill();
        };
    }, []);

    return (
        <section id="event" className="mx-auto min-h-screen px-8 md:px-16 py-24 bg-black text-white">
            <div className="mb-8 flex flex-col items-start justify-start md:px-8">
                {/* <h2 id='event-text' className="max-w-lg text-4xl text-white font-bold md:text-5xl opacity-0 translate-y-32">
                    Explore all Events
                    <span className="text-slate-400"></span>
                </h2> */}
                <h2 id='event-text' className="text-4xl font-bold md:text-5xl px-2 py-4 text-white opacity-0 translate-y-32">
                        Explore
                </h2>
                <h1 id='event-text' className="text-5xl md:text-6xl px-2 font-bold text-transparent opacity-0 translate-y-32"
                                        style={{
                                            WebkitTextStrokeWidth: "2px",
                                            WebkitTextStrokeColor: "white",
                                        }}
                                        >All Events</h1>
            
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4 ">
                <BounceCard className="col-span-12 md:col-span-4 opacity-0 translate-y-52 event-card">
                    <CardTitle>Hackathon</CardTitle>
                    <img
                        src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Hackathon"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                    <div onClick={() => navigate("/hackathon")} 
                    className="absolute bottom-0 left-4 right-4 top-32 translate-y-28 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[500ms] group-hover:translate-y-20 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            Join our Hackathon!
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8 opacity-0 translate-y-52 event-card">
                    <CardTitle>Technical Events</CardTitle>
                    <img
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Technical Events"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                    <div
                        onClick={() => navigate("/technical")} // Wrap navigate in an arrow function
                        className="absolute bottom-0 left-4 right-4 top-32 translate-y-28 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[500ms] group-hover:translate-y-20 group-hover:rotate-[2deg]"
                    >
                        <span className="block text-center font-semibold text-orange-50">
                            Explore our Technical Events!
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8 opacity-0 translate-y-52 event-card">
                    <CardTitle>Non-Technical Events</CardTitle>
                    <img
                        src="https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Non-Technical Events"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                    <div  onClick={() => navigate("/nontechnical")} 
                    className="absolute bottom-0 left-4 right-4 top-32 translate-y-28 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[500ms] group-hover:translate-y-20 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">
                            Discover Non-Technical Events!
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4 opacity-0 translate-y-52 event-card">
                    <CardTitle>Workshops</CardTitle>
                    <img
                        src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Workshops"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                    <div onClick={() => navigate("/workshop")} 
                    className="absolute bottom-0 left-4 right-4 top-32 translate-y-28 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[500ms] group-hover:translate-y-20 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-red-50">
                            Join our Workshops!
                        </span>
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg", onDurationChange: 1 }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-black p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};

export default EventList;
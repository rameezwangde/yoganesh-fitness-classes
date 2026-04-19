import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf, FaDumbbell, FaBrain, FaUsers, FaUserTie, FaCalendarAlt, FaTrophy, FaArrowRight } from 'react-icons/fa'
import TiltWrapper from '../ui/TiltWrapper'

const features = [
    {
        icon: FaLeaf,
        title: "Physical Transformation",
        desc: "Build unparalleled strength, enhance posture, and increase core flexibility through ancient discipline and modern science."
    },
    {
        icon: FaBrain,
        title: "Mental Serenity",
        desc: "Sharpen focus, drastically reduce stress limits, and cultivate emotional balance with mindful breathing."
    },
    {
        icon: FaDumbbell,
        title: "Health & Vitality",
        desc: "Unlock increased energy, better sleep cycles, lowered blood pressure, and a completely toned body."
    },
    {
        icon: FaUsers,
        title: "Supportive Network",
        desc: "Embrace a healthier lifestyle guided by experts inside an empowering and uplifting fitness community."
    }
]

const YogaAbout = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-text/5">
            {/* Ambient glowing background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/3 w-[40rem] h-[40rem] bg-brand-red-dark/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] bg-brand-red-light/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                {/* TOP ROW: Title & Interactive Feature Grid */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 items-center">
                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex-shrink-0 mb-8 lg:mb-0"
                    >
                        <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-6 block drop-shadow-sm">Introduction</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-brand-text mb-8 tracking-tight leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark block mt-2">Us</span>
                        </h2>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-brand-red-light to-transparent"></div>
                            <FaLeaf className="text-brand-red-light text-2xl drop-shadow-md" />
                        </div>
                        <p className="text-brand-text-muted text-lg font-medium leading-relaxed mb-8">
                            Yoganesh Fitness Classes offers a transformative ecosystem to redefine your physical limits and find inner peace.
                        </p>
                        <button className="hidden lg:inline-flex px-8 py-3 bg-brand-text text-white font-extrabold rounded-full hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 tracking-widest text-xs uppercase">
                            Read Our Story
                        </button>
                    </motion.div>

                    {/* Right Column: Interactive Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                    >
                        {features.map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                                <TiltWrapper key={idx} intensity={12} scaleOnHover={1.02}>
                                    <div className="bg-white/70 backdrop-blur-md rounded-[2rem] p-8 border border-white shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(192,0,0,0.12)] hover:bg-white hover:border-brand-red-light/20 transition-all duration-500 group relative overflow-hidden h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="w-14 h-14 rounded-full bg-brand-bg-alt flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-gradient-primary transition-all duration-500 shadow-sm relative z-10">
                                            <IconComponent className="text-2xl text-brand-red-dark group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-brand-text mb-3 group-hover:text-brand-red-dark transition-colors duration-300 relative z-10">
                                            {feature.title}
                                        </h3>
                                        
                                        <p className="text-brand-text-muted text-sm font-medium leading-relaxed relative z-10">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </TiltWrapper>
                            )
                        })}
                    </motion.div>
                </div>

                {/* MIDDLE ROW: Stats & Discover */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32 items-center">
                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 md:gap-6 relative"
                    >
                        {/* Decorative Background Blob behind stats */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red-light/5 rounded-full blur-[80px] pointer-events-none"></div>

                        {[
                            { number: "5", text: "Skilled Trainers", icon: FaUserTie },
                            { number: "320", text: "Happy Clients", icon: FaUsers },
                            { number: "365", text: "Days Active", icon: FaCalendarAlt },
                            { number: "9", text: "Awards Won", icon: FaTrophy }
                        ].map((stat, idx) => {
                            const StatIcon = stat.icon;
                            return (
                                <div key={idx} className={`transform transition-all duration-700 w-full h-full flex flex-col justify-stretch ${idx % 2 !== 0 ? 'md:translate-y-6' : ''}`}>
                                    <TiltWrapper intensity={15} scaleOnHover={1.03}>
                                        <div className="bg-white/80 backdrop-blur-md border border-white shadow-[0_15px_30px_rgba(0,0,0,0.03)] rounded-[2.5rem] p-6 md:p-8 text-center hover:bg-white hover:border-brand-red-light/20 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] transition-all duration-500 group overflow-hidden relative h-full flex flex-col items-center justify-center min-h-[180px]">
                                            {/* Glow on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                                            <StatIcon className="text-3xl text-brand-red-light/40 group-hover:text-brand-red-light mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 relative z-10" />

                                            <div className="text-4xl md:text-5xl font-black text-brand-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-red-light group-hover:to-brand-red-dark mb-2 transition-all duration-500 relative z-10">
                                                {stat.number}
                                            </div>
                                            <div className="text-brand-text-muted font-black tracking-widest uppercase text-[10px] md:text-xs relative z-10 group-hover:text-brand-red-dark transition-colors duration-300">
                                                {stat.text}
                                            </div>
                                        </div>
                                    </TiltWrapper>
                                </div>
                            )
                        })}
                    </motion.div>

                    {/* Discover Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pl-16 relative"
                    >
                        <div className="inline-flex items-center space-x-2 bg-brand-bg-alt px-5 py-2 rounded-full border border-brand-text/5 mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-red-light animate-pulse"></span>
                            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-text-muted">Fun Fact</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text mb-8 leading-[1.1] tracking-tight">
                            Discover A New <br /> Way Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Fitness.</span>
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-gradient-to-r from-brand-red-light to-transparent"></div>
                            <FaDumbbell className="text-brand-red-light text-2xl drop-shadow-md" />
                        </div>
                        
                        <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed font-medium mb-12">
                            Yoganesh Fitness Classes blends ancient meditative principles with high-intensity modern workflows globally. Experience peak physical conditioning.
                        </p>
                        
                        <button className="group px-8 py-4 bg-brand-text text-white font-extrabold rounded-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 tracking-widest text-xs uppercase inline-flex items-center justify-center gap-4">
                            START TRAINING <FaArrowRight className="text-brand-red-light group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>

                {/* BOTTOM ROW: Video & Inner Peace Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-brand-bg-alt border border-brand-text/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    {/* Fancy Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red-dark/10 rounded-full blur-[80px] group-hover:bg-brand-red-dark/20 transition-all duration-700 pointer-events-none"></div>



                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-brand-text-muted text-lg leading-relaxed font-medium relative z-10 lg:pl-8"
                    >
                        <p>
                            Yoganesh Fitness Classes is hyper-dedicated to promoting cardiovascular health, muscular endurance, and deep wellness through expert-led sessions.
                        </p>
                        <p>
                            We cater to every level—whether a complete novice or an advanced athlete—to achieve optimal body recomposition and athletic performance.
                        </p>
                        <TiltWrapper intensity={15} scaleOnHover={1.05}>
                            <img
                                src="https://yogamudrafitnessclasses.com/wp-content/uploads/2025/06/round-e1750972067386-1024x504.jpg"
                                loading="lazy"
                                alt="Yoganesh Focus"
                                className="w-full h-48 object-cover rounded-2xl mt-8 border border-brand-text/5 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </TiltWrapper>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default YogaAbout

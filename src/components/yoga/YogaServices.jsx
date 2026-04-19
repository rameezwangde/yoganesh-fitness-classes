import React from 'react'
import { motion } from 'framer-motion'
import { FaLeaf } from 'react-icons/fa'

const YogaServices = () => {
    const channelLink = "https://www.youtube.com/channel/UCB95ewujlU5zM_wwKcALVCA";

    const services = [
        { title: "Asthanga Yoga", desc: "A dynamic, disciplined practice focusing on breath, movement, and mindfulness to build internal heat and strength.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/oGBIDJdrBX4?si=4GFTvEK-NcGYtPo1" },
        { title: "Vinyasa Yoga", desc: "A creative form of yoga where poses are linked together with the breath in a flowing sequence.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/xpJJR6JaqeI?si=Fa9RLpbQXYuU3avT" },
        { title: "Power Yoga", desc: "A fast-paced, fitness-based yoga style that builds muscle, increases heart rate, and boosts metabolism.", img: "/services-power.png", url: "https://youtu.be/U1cHGJYIwhA?si=X8734dGhyP0MWALK" },
        { title: "Hatha & Yin Yoga", desc: "Combining active Hatha poses with slow, deep-stretching Yin sequences for physical and mental balance.", img: "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/X3rsfeP4gp8?si=AbGKjEvAWxX0tlXl" },
        { title: "Restorative Yoga", desc: "A gentle, therapeutic style that uses props to support the body in long-held poses for deep relaxation.", img: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/VU6u-Fjtbd4?si=sDroybvjBRt4oCo_" },
        { title: "Iyengar Yoga", desc: "Focused on structural alignment and precision through the use of props like blocks and straps.", img: "/services-iyengar.png", url: "https://youtu.be/FEqeeb02E80?si=GTYYkOkA_ryTcKcG" },
        { title: "Kundalini Yoga", desc: "Awakening energy through specific sequences of movement, breathwork, chanting, and meditation.", img: "/services-kundalini.png", url: "https://youtu.be/Wj1oFA4xuOA?si=T92xmaxWiYpA2Qg1" },
        { title: "Hot & Bikram Yoga", desc: "Practiced in a heated room to promote detoxification, deeper stretching, and cardiovascular health.", img: "/services-hot.png", url: "https://youtu.be/Xc3FOKlCXZM?si=CMrVAym7PuN1YpIl" },
        { title: "Prenatal Yoga", desc: "Safe and effective yoga tailored for expectant mothers to support physical health and emotional well-being.", img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/-3bvlFKeLRE?si=lJ8VX4q_UArn-oot" },
        { title: "Chair Yoga", desc: "A gentle form of yoga practiced while sitting on a chair, making it accessible for all mobility levels.", img: "/services-chair.png", url: "https://youtu.be/ihcBeW0eMWc?si=46xiuvz7pMq9_zOB" },
        { title: "Shuddhikriya", desc: "Cleansing techniques (Shatkarma) to purify the body, enhance immunity, and prepare for deeper practice.", img: "/services-shuddhikriya.png", url: "https://youtu.be/zrwitknugZo?si=UX5DlO5cD2XHzXrW" },
        { title: "Nutrition & Dietitian", desc: "Expert guidance on mindful eating and personalized diet plans to fuel your fitness journey.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/inEPlZZ_SfA?si=uo0OljnXROnbG09P" },
        { title: "Zumba", desc: "A high-energy dance fitness program that combines Latin and international music with dance moves.", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600&auto=format&fit=crop", url: "https://youtu.be/r8YJKIckP-E?si=j_RS6GGRnpU-TX5u" },
        { title: "Aerial", desc: "Using a silk hammock to support the body, allowing for deeper stretches and inverted poses.", img: "https://i1.wp.com/bhamnow.com/wp-content/uploads/2020/03/aerial-yoga-via-be-studio-scaled.jpg?fit=2048%2C1366&ssl=1", url: "https://youtu.be/1tdX0DYK2Jk?si=PrmePl5h0yosFK0m" },
        { title: "Pilates", desc: "Focusing on core strength, posture, and flexibility through controlled, precise movements.", img: "https://img.freepik.com/premium-photo/people-stretching-pilates-reformers_126745-3577.jpg?w=2000", url: "https://youtu.be/C2HX2pNbUCM?si=9R-Xb3N2_3vbT2jM" },
        { title: "Bollywood Dance", desc: "A vibrant, high-energy dance style that blends traditional Indian forms with modern beats for a full-body workout.", img: "/services-bollywood.png", url: "https://youtu.be/lD1X-ODWhvg?si=3ui0QfW0Gfj0ypE6" }
    ];

    return (
        <section id="services" className="py-24 md:py-32 bg-brand-bg-alt relative overflow-hidden border-b border-brand-text/5">
            {/* Background glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-red-light/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-red-dark/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 leading-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-text-muted text-lg relative"
                    >
                        We offer a wide range of holistic fitness, yoga, and wellness services designed for all levels. Experience transformation through mindfulness, movement, and community.
                    </motion.p>
                    <div className="flex justify-center mt-8">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-red-light to-transparent"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {services.map((service, idx) => (
                        <motion.a
                            key={idx}
                            id={service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                            href={service.url || channelLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-brand-text/5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col cursor-pointer"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={service.img}
                                    loading="lazy"
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <FaLeaf className="text-brand-red-light" />
                                </div>
                                <div className="absolute bottom-6 left-6 z-20 pr-6">
                                    <h3 className="text-2xl font-black text-white leading-tight">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <p className="text-brand-text-muted leading-relaxed font-medium mb-6">
                                    {service.desc}
                                </p>
                                <div className="flex items-center text-brand-red-light font-bold text-sm uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                                    <span className="mr-2">Watch on YouTube</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default YogaServices

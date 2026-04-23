import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HiArrowLeft } from 'react-icons/hi';
import { testimonials } from '../constants/testimonials';

const SuccessStories = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-brand-bg relative overflow-hidden">
            <Helmet>
                <title>Real Success Stories | YOGANESH FITNESS CLASSES</title>
                <meta name="description" content="Read what our students have to say about their journey with Yoganesh Fitness Classes. Real stories, real results." />
            </Helmet>

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-red-light rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-red-dark rounded-full blur-[140px]"></div>
            </div>

            {/* Header */}
            <header className="sticky top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-xl border-b border-brand-text/5 z-50 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-brand-text hover:text-brand-red-light transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-brand-bg-alt flex items-center justify-center border border-brand-text/5 group-hover:bg-brand-red-light group-hover:text-white transition-all">
                            <HiArrowLeft />
                        </div>
                        <span className="font-black uppercase tracking-widest text-xs hidden sm:block">Back to Home</span>
                    </Link>
                    
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                        <span className="font-black text-lg tracking-tight uppercase">
                            <span style={{ color: '#3B82F6' }}>YOGA</span><span style={{ color: '#000000' }}>NESH</span>
                        </span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6"
                    >
                        Our Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Success</span> Stories
                    </motion.h1>
                    <p className="text-brand-text-muted text-lg font-medium">
                        Real journeys of transformation, healing, and strength from the Yoganesh community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {/* Featured Item (First one) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-brand-text/5 relative overflow-hidden group mb-6"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-32 h-32 fill-current text-brand-red-light" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" /></svg>
                        </div>
                        
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-text mb-6 border-b border-brand-text/5 pb-4">{testimonials[0].name}</h2>
                            <div className="space-y-4 italic">
                                {testimonials[0].content.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-brand-text-muted text-base md:text-lg leading-relaxed font-medium">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Rest of the testimonials */}
                    {testimonials.slice(1).map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 3) * 0.1 }}
                            className="bg-white rounded-[2rem] p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-brand-text/5 flex flex-col gap-5 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 border-b border-brand-text/5 pb-4">
                                <h3 className="text-lg font-bold text-brand-text leading-tight">{t.name}</h3>
                            </div>
                            <p className="text-brand-text-muted text-[15px] leading-relaxed font-medium italic">
                                "{t.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-3 px-10 py-4 bg-brand-text text-white rounded-full font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-xl"
                    >
                        <HiArrowLeft />
                        Back to Home
                    </Link>
                </div>
            </main>

            <footer className="py-12 border-t border-brand-text/5 text-center">
                <p className="text-brand-text-muted font-black uppercase tracking-[0.3em] text-[10px]">
                    © 2026 YOGANESH FITNESS CLASSES • ULWE
                </p>
            </footer>
        </div>
    );
};

export default SuccessStories;

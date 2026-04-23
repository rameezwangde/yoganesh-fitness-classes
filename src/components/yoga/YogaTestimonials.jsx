import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { testimonials } from '../../constants/testimonials'

const YogaTestimonials = () => {
    // Only show first 2 for the homepage preview
    const previewTestimonials = testimonials.slice(0, 2);

    return (
        <section id="testimonials" className="py-12 md:py-16 bg-brand-bg-alt relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-red-light rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-red-dark rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 mb-12">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-brand-text mb-4"
                    >
                        Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Success</span> Stories
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <span className="font-black text-brand-text uppercase tracking-widest text-sm">Verified Success Stories</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Featured Testimonial (First one) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] border border-brand-text/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <svg className="w-24 h-24 fill-current text-brand-red-light" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" /></svg>
                        </div>
                        
                        <div className="flex flex-col gap-3 relative z-10">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-black text-brand-text mb-4 border-b border-brand-text/5 pb-3">{previewTestimonials[0].name}</h3>
                                <div className="space-y-3 italic">
                                    <span className="text-brand-red-light/40 text-4xl font-serif absolute -top-2 -left-2">"</span>
                                    {previewTestimonials[0].content.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-brand-text-muted text-sm md:text-base leading-relaxed font-medium">
                                            {para}
                                        </p>
                                    ))}
                                    <span className="text-brand-red-light/40 text-4xl font-serif absolute -bottom-2 -right-2">"</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Preview Grid (Only 1 more review as preview) */}
                    {previewTestimonials.slice(1).map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[1.5rem] p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-brand-text/5 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 border-b border-brand-text/5 pb-3">
                                <h4 className="text-base font-bold text-brand-text leading-tight">{t.name}</h4>
                            </div>
                            <p className="text-brand-text-muted text-sm leading-relaxed font-medium italic">
                                "{t.content.length > 250 ? t.content.substring(0, 250) + "..." : t.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <Link 
                        to="/success-stories"
                        className="inline-block px-10 py-4 bg-brand-text text-white rounded-full font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-lg shadow-brand-text/10"
                    >
                        View All Success Stories
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default YogaTestimonials

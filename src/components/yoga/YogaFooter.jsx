import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const YogaFooter = ({ scrollToSection }) => {
    return (
        <footer className="bg-brand-bg-alt relative border-t border-brand-text/5 overflow-hidden">
            {/* Massive Parallax Brand Watermark */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] flex justify-center opacity-[0.02] pointer-events-none select-none z-0">
                <span className="text-[120px] md:text-[250px] lg:text-[400px] font-black tracking-tighter text-brand-text whitespace-nowrap">
                    YOGANESH
                </span>
            </div>

            {/* Glowing Top Border Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red-light/30 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    
                    {/* Brand Col */}
                    <div className="lg:col-span-4 pr-0 lg:pr-12">
                        <button onClick={() => scrollToSection('home')} className="flex items-center gap-4 text-brand-text mb-6 group text-left">
                            <img src="/logo.png" alt="Yoganesh Logo" loading="lazy" className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
                            <div className="flex flex-col items-start leading-none text-left">
                                <span className="text-2xl font-black tracking-widest leading-none">
                                    <span className="transition-colors" style={{ color: '#3B82F6' }}>YOGA</span><span className="transition-colors" style={{ color: '#000000' }}>NESH</span>
                                </span>
                                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-text-muted mt-1.5 leading-none">
                                    Fitness Classes
                                </span>
                            </div>
                        </button>
                        <p className="text-brand-text-muted text-base leading-relaxed mb-8">
                            A Complete Wellness Ecosystem. Train your body, strengthen your mind. Heal, Learn, Prevent. We engineer your ultimate transformation.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: FaInstagram, url: "https://www.instagram.com/yogamudrafitnessclasses?igsh=cTN2Nm14YnEzdTAy" },
                                { icon: FaFacebookF, url: "#" },
                                { icon: FaYoutube, url: "#" }
                            ].map((social, i) => {
                                const Icon = social.icon;
                                return (
                                <motion.a 
                                    key={i}
                                    href={social.url}
                                    target={social.url !== "#" ? "_blank" : undefined}
                                    rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-[1rem] bg-brand-text/5 flex items-center justify-center text-brand-text hover:bg-brand-red-light transition-colors duration-300 hover:text-white shadow-sm border border-brand-text/5"
                                >
                                    <Icon className="text-xl" />
                                </motion.a>
                            )})}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Discover</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', id: 'home' },
                                { name: 'About Us', id: 'about' },
                                { name: 'Services', id: 'services' },
                                { name: 'Testimonials', id: 'testimonials' },
                                { name: 'FAQ', id: 'faq' },
                                { name: 'Contact', id: 'contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <button onClick={() => scrollToSection(link.id)} className="text-brand-text-muted hover:text-brand-red-light transition-all duration-300 text-sm font-medium flex items-center group w-full text-left">
                                        <FaArrowRight className="mr-2 text-brand-red-light opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">{link.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div className="lg:col-span-3">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Programs</h4>
                        <ul className="space-y-4 flex flex-col">
                            {['Yoga Training', 'Zumba Classes', 'Personal Coaching', 'Meditation Sessions', 'Flexibility Programs'].map((link, i) => (
                                <li key={i}>
                                    <button className="text-brand-text-muted hover:text-brand-red-light transition-all duration-300 text-sm font-medium flex items-center group text-left cursor-pointer">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-text/10 mr-3 group-hover:bg-brand-red-light group-hover:scale-150 transition-all duration-300"></span>
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3">
                        <h4 className="text-brand-text font-black mb-8 uppercase tracking-widest text-xs flex items-center"><span className="w-4 h-[2px] bg-brand-red-light mr-3"></span> Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <span className="pt-1 leading-relaxed">902 NMS ICON Building,<br />Opp Bamandongari station,<br />Ulwe, Navi Mumbai</span>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaPhoneAlt className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <a href="tel:+918422923924" className="hover:text-brand-red-light transition-colors font-semibold tracking-wide">+91 8422923924</a>
                            </li>
                            <li className="flex items-center text-sm text-brand-text-muted group">
                                <div className="w-8 h-8 rounded-full bg-brand-red-light/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-red-light transition-colors duration-300">
                                    <FaEnvelope className="text-brand-red-dark group-hover:text-white transition-colors" />
                                </div>
                                <a href="mailto:yoganeshfitnessclasses@gmail.com" className="hover:text-brand-red-light transition-colors">yoganeshfitnessclasses@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-text/5 flex flex-col md:flex-row justify-between items-center relative z-10">
                    <p className="text-brand-text-muted text-xs mb-4 md:mb-0 font-medium tracking-wide">
                        © {new Date().getFullYear()} YOGANESH FITNESS CLASSES. Powered By Excellence. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <span className="text-brand-text-muted text-xs font-semibold hover:text-brand-red-light transition-colors uppercase tracking-widest cursor-pointer">Privacy Policy</span>
                        <span className="text-brand-text-muted text-xs font-semibold hover:text-brand-red-light transition-colors uppercase tracking-widest cursor-pointer">Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default YogaFooter

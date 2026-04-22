import React, { useState } from 'react'
import { motion } from 'framer-motion'

const YogaContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) return;

        // Construct email data
        const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        const mailtoLink = `mailto:yoganeshfitnessclasses@gmail.com?subject=New Fitness Query from ${formData.name}&body=${emailBody}`;
        
        // Construct WhatsApp data
        const waMessage = `Hi Yoganesh Fitness,%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        const waLink = `https://wa.me/918422923924?text=${waMessage}`;

        // Open WhatsApp in new tab
        window.open(waLink, '_blank');
        
        // Simultaneously trigger local email client
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 100);
    };
    const contactCards = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ),
            title: "Location Address",
            desc: "Nms Icon, 902, PLOT NO. 194, near Bamandongri Railway Station, Sector 19, Ulwe, Navi Mumbai, Maharashtra 410206"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            ),
            title: "Phone Number",
            desc: "Mob : +91 8422923924"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ),
            title: "Email Address",
            desc: "yoganeshfitnessclasses@gmail.com"
        }
    ]

    return (
        <section id="contact" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red-dark/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Area: Contact Cards */}
                <div className="mb-24 px-0 md:px-8">
                    {/* Info Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-20 px-4 md:px-12 mx-auto max-w-6xl">
                        {contactCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                className="bg-white p-8 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-brand-text/5 text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto bg-brand-bg rounded-full flex items-center justify-center mb-6 text-brand-red-light group-hover:scale-110 group-hover:bg-brand-red-light/10 group-hover:shadow-[0_0_20px_rgba(192,0,0,0.1)] transition-all duration-300">
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-bold text-brand-text mb-4 transition-colors group-hover:text-brand-red-light">{card.title}</h4>
                                <p className="text-brand-text-muted font-medium leading-relaxed max-w-[250px] mx-auto text-[15px]">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Area: Form & Map Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto px-0 md:px-8">
                    {/* Left Text & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-8 leading-tight">
                            Feel Free To Contact <br /> And Reach Us !
                        </h2>

                        <div className="flex items-start gap-4 mb-8">
                            <div className="mt-1 text-brand-red-light">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                            </div>
                            <p className="text-brand-text-muted text-lg leading-relaxed font-medium">
                                Feel free to connect and reach us at Yoganesh Fitness Classes for expert guidance on yoga, meditation, wellness tips, and personalized fitness plans tailored to your needs.
                            </p>
                        </div>

                        {/* Gorgeous Filtered Map Frame */}
                        <div className="relative w-full h-80 rounded-[2rem] overflow-hidden shadow-xl border border-brand-text/5 group">
                            <div className="absolute inset-0 bg-brand-red-dark/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10 mix-blend-color"></div>
                            <div className="absolute inset-0 ring-1 ring-inset ring-brand-text/5 rounded-[2rem] z-20 pointer-events-none"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693190868846!2d73.02325011119523!3d18.968080282121045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ba8109ed8d%3A0x6b29ebd836d5b038!2sNMS%20ICON!5e0!3m2!1sen!2sin!4v1710849202157!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Yoganesh Location Map"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-brand-text/5"
                    >
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-10 text-center lg:text-left">Contact Us</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="group">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Your Name.."
                                    className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 font-medium"
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder="Your Email.."
                                    className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 font-medium"
                                />
                            </div>
                            <div className="group">
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    placeholder="Enter Your Message.."
                                    rows="5"
                                    className="w-full px-6 py-4 bg-brand-bg-alt text-brand-text rounded-[1.5rem] border border-transparent focus:border-brand-red-light/30 focus:bg-white focus:ring-4 focus:ring-brand-red-light/10 transition-all outline-none placeholder:text-brand-text/30 resize-none font-medium"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-primary text-white font-extrabold rounded-full hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 tracking-wider text-sm mt-4"
                            >
                                SUBMIT MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default YogaContact

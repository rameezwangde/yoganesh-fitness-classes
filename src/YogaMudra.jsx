import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

// Core Components (Eager Load for LCP)
import YogaHero from './components/yoga/YogaHero'
import YogaAbout from './components/yoga/YogaAbout'

// Lazy-Loaded Sections (Below the fold)
const YogaBenefits = lazy(() => import('./components/yoga/YogaBenefits'))
const YogaServices = lazy(() => import('./components/yoga/YogaServices'))
const YogaTimetable = lazy(() => import('./components/yoga/YogaTimetable'))
const YogaFAQ = lazy(() => import('./components/yoga/YogaFAQ'))
const YogaTestimonials = lazy(() => import('./components/yoga/YogaTestimonials'))
const YogaCTA = lazy(() => import('./components/yoga/YogaCTA'))
const YogaContact = lazy(() => import('./components/yoga/YogaContact'))
const YogaFooter = lazy(() => import('./components/yoga/YogaFooter'))

const YogaMudra = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [visible, setVisible] = useState(true)
    const { scrollY } = useScroll()

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'faq', label: 'FAQ' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'contact', label: 'Contact us' }
    ]

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        setScrolled(latest > 20)
        if (latest > previous && latest > 150) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    })

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -60% 0px' }
        )

        navItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const yOffset = -120
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>YOGANESH FITNESS CLASSES | Premium Training & Wellness</title>
                <meta name="description" content="Welcome to Yoganesh Fitness Classes - A Complete Wellness Ecosystem. Train your body, strengthen your mind." />
            </Helmet>

            <main className="bg-brand-bg text-brand-text min-h-screen">
                {/* Main Navigation Bar */}
                <motion.header
                    initial={{ y: 0 }}
                    animate={{ 
                        y: visible ? 0 : -100,
                        backgroundColor: scrolled ? "rgba(253, 251, 247, 0.85)" : "rgba(253, 251, 247, 0)",
                        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
                        boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none",
                        paddingTop: scrolled ? "12px" : "20px",
                        paddingBottom: scrolled ? "12px" : "20px"
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 1, 0.2, 1] }}
                    className="fixed top-0 left-0 w-full z-50 border-b border-transparent transition-colors duration-500"
                    style={{ 
                        borderBottomColor: scrolled ? "rgba(0,0,0,0.05)" : "transparent"
                    }}
                >
                    <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative z-50">
                        {/* Logo */}
                        <button onClick={() => scrollToSection('home')} className="z-50 relative group flex items-center gap-3 md:gap-4 justify-start">
                            <img src="/logo.png" alt="Yoganesh Logo" className="h-10 md:h-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
                            <div className="flex flex-col items-start leading-none text-left">
                                <span className="text-xl md:text-2xl font-black tracking-widest text-brand-text leading-none">
                                    <span style={{ color: '#3B82F6' }}>YOG</span>ANESH
                                </span>
                                <span className="text-[8px] md:text-[10px] font-black tracking-[0.25em] uppercase text-brand-text-muted mt-1 md:mt-1.5 leading-none">
                                    Fitness Classes
                                </span>
                            </div>
                        </button>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-12 px-6 py-2 bg-transparent">
                            <ul className="flex space-x-10">
                                {navItems.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-red-light relative group ${activeSection === link.id ? 'text-brand-red-light' : 'text-brand-text/80 hover:text-brand-text'
                                                }`}
                                        >
                                            {link.label}
                                            <span className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-brand-red-light transform origin-left transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Start Journey Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-brand-text text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-brand-red-light hover:shadow-[0_15px_30px_rgba(192,0,0,0.25)] transition-all transform hover:-translate-y-1"
                            >
                                Start Journey
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-brand-bg-alt/50 border border-brand-text/5 text-brand-text text-2xl focus:outline-none z-50 relative hover:text-brand-red-light transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>

                    {/* Mobile Drawer */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                {/* Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] pointer-events-auto"
                                    style={{ height: '100dvh' }}
                                />
                                {/* Drawer */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    className="lg:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-brand-bg text-brand-text z-[70] shadow-2xl flex flex-col pointer-events-auto border-l border-brand-text/10"
                                >
                                    <div className="flex items-center justify-between p-6 border-b border-brand-text/5">
                                        <div className="flex items-center gap-3">
                                            <img src="/logo.png" alt="Yoganesh Logo" className="h-10 w-auto shrink-0 object-contain" />
                                            <div className="flex flex-col items-start leading-none text-left">
                                                <span className="font-black text-lg tracking-widest uppercase leading-none">
                                                    <span style={{ color: '#3B82F6' }}>YOG</span>ANESH
                                                </span>
                                                <span className="text-[8px] font-black tracking-[0.25em] uppercase text-brand-text-muted mt-1 leading-none">
                                                    Fitness Classes
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            className="w-10 h-10 flex items-center justify-center text-brand-text text-xl focus:outline-none rounded-full bg-brand-bg-alt border border-brand-text/5 active:scale-95 transition-transform"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <HiX />
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6">
                                        <ul className="flex flex-col gap-4">
                                            {navItems.map((item) => (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => scrollToSection(item.id)}
                                                        className={`w-full text-left px-6 py-4 rounded-2xl font-black tracking-[0.2em] uppercase text-sm active:scale-95 transition-all ${activeSection === item.id
                                                            ? 'bg-brand-red-light text-white shadow-lg'
                                                            : 'bg-brand-bg-alt/50 text-brand-text/80 hover:text-brand-text hover:bg-brand-bg-alt'
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </button>
                                                </li>
                                            ))}
                                            <li className="mt-8">
                                                <button
                                                    onClick={() => scrollToSection('contact')}
                                                    className="w-full text-center px-6 py-4 bg-brand-text text-white rounded-full font-black tracking-widest uppercase text-sm shadow-xl active:scale-95 transition-all"
                                                >
                                                    Start Journey
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.header>

                <YogaHero />
                <YogaAbout />
                
                <Suspense fallback={<div className="h-[200px] flex items-center justify-center font-black text-brand-red-light tracking-widest uppercase text-xs">Loading Sections...</div>}>
                    <YogaBenefits />
                    <YogaServices />
                    <YogaTimetable />
                    <YogaFAQ />
                    <YogaTestimonials />
                    <YogaCTA scrollToSection={scrollToSection} />
                    <YogaContact />
                    <YogaFooter scrollToSection={scrollToSection} />
                </Suspense>
            </main>
        </HelmetProvider>
    )
}

export default YogaMudra

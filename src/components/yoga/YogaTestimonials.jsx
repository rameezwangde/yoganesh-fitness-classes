import React from 'react'
import { motion } from 'framer-motion'

const YogaTestimonials = () => {
    const testimonials = [
        {
            name: "Shweta Aggarwal",
            content: "Ganesh Sir is an exceptional instructor whose yoga and Zumba classes have made a remarkable difference in the lives of his students. His dedication to fitness, combined with his positive attitude and deep knowledge, creates an inspiring and welcoming environment for everyone, regardless of age or fitness level. Attending his sessions is not just about exercise; it is a holistic experience that nurtures both physical and mental well-being.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shweta"
        },
        {
            name: "Reshma Shelke",
            content: "I have completed one month today. I have joined 3 yoga classes till now but I will recommend only for this class as this class works for 365 days no holidays, they also have time flexibility to join any batch and the Ganesh sir is teaching us so passionately. His aim is to aware everyone importance of yoga. I heard many stories from old students that after joining this class they have improved their strength stamina.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reshma"
        },
        {
            name: "Vibhavari Patole",
            content: "I absolutely loved this yoga class. The instructor was knowledgeable, calm, and attentive, offering clear guidance and thoughtful adjustments for all levels. The flow was well paced, challenging yet accessible, and left me feeling both energized and relaxed. The atmosphere was welcoming and peaceful, making it easy to fully unwind and focus on the practice.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vibhavari"
        },
        {
            name: "Mahesh Kunwar",
            content: "I am 60 years old and I have been attending yoga classes under Ganesh Sir. My experience has been extremely positive. Since joining, I feel much more energetic, my body has become more flexible, and my overall well-being has improved a lot. Ganesh Sir explains every posture very calmly and clearly, and he gives special attention to everyone.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahesh"
        },
        {
            name: "HEMA YELMAR",
            content: "This yoga class is so amezing. Ganesha sir is an excellent yoga teacher. His classes are so energetic and suitable for all people. He is highly professional, motivating and explain every pose clearly. After attending the class I feel relaxed , centered and calm. Highly recommend!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hema"
        },
        {
            name: "Saurabh Shivhare",
            content: "It is a great place if you wish to do Yoga with a batch of people. Instructor is highly experienced in the field and very energetic. He motivates and pushes to do the workout and make perfect Yoga poses. I really like the environment of the Yoga Mudra Fitness Classes...",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saurabh"
        },
        {
            name: "Supriya Yadav",
            content: "My experience at Yoga Mudra Fitness Classes has been truly exceptional! The studio is spotless, well-organized, and has a calming, positive atmosphere. The trainers are incredibly knowledgeable and patient—they pay attention to every detail and offer personalized guidance that has really helped me improve my flexibility and posture.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Supriya"
        },
        {
            name: "Iteeksha Boniya",
            content: "The classes are a must have for someone who wants to increase flexibility, loose weight and have health issues. The instructors are very good. With yoga we also have zumba, bollywood dance, Ariel yoga and other activities as well. Perfect place if you are not fond of the gyms.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Iteeksha"
        },
        {
            name: "Anushree Rathi",
            content: "This yoga class is truly amazing. Every day we learn a different type of yoga using various props, which makes the sessions very effective and interesting. The sir is extremely knowledgeable and gives personal attention, especially for fat loss and post-partum weight loss. Highly recommended!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anushree"
        },
        {
            name: "Shristi Mudgal",
            content: "Yoga Mudra Fitness Classes is the best place in Ulwe for yoga and fitness. The instructor is highly skilled, supportive, and focuses on correct posture and breathing. I feel healthier, more energetic, and stress-free after joining. Highly recommended for anyone looking to improve well-being.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shristi"
        },
        {
            name: "Gauri Yadav",
            content: "My experience has been truly exceptional! The studio is spotless and has a calming, positive atmosphere. Ganesh sir is very kind. He teaches yoga very nicely and has lots of knowledge based on yoga and nutrition. Classes are flexible, students can come at their own convenience.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gauri"
        },
        {
            name: "Shamili k sivadasan",
            content: "One of the best yoga fitness classes I’ve ever attended! The trainer is highly professional, motivating, and explains every pose clearly. The sessions are refreshing, energizing, and suitable for all fitness levels. I feel more flexible, calm, and confident after every class.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shamili"
        },
        {
            name: "Saurabh Bansode",
            content: "This yoga class has helped me improve both my physical health and mental peace. The instructor is patient, knowledgeable, and attentive to everyone. The atmosphere is positive and motivating. Highly recommended for beginners and experienced practitioners.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bansode"
        },
        {
            name: "Amruta Bagul",
            content: "Highly recommend! Yoga mudra classes has an exceptional instructor who provides personalized attention to each student. Their guidance and patience helped me improve my practice significantly. The classes are engaging, and the atmosphere is supportive. Grateful for the opportunity!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amruta"
        },
        {
            name: "Dr. Vidya Patil",
            content: "Mr. Ganesh sir is a fantastic teacher with a lot of knowledge. Sir personally gives attention and motivates to each student. The class is designed with a combo of Yoga, Hot yoga, Meditation, Zumba, Aerial, CrossFit and many more. Highly recommend to everyone in Ulwe.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vidya"
        },
        {
            name: "Sonam karnik",
            content: "I have been attending for past 2 months, and the experience has been truly amazing. Mr. Ganesh sir is a fantastic teacher with a lot of knowledge. He personally gives attention and motivates each student. The environment of class is very positive and friendly.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonam"
        },
        {
            name: "Pritam Karkare",
            content: "This class is house of positivity. Main anchor is Ganesh sir, his vision is for sustainable growth. You will see drastically changed life in 1 week. Ganesh sir teaches all various type of yogas. Must attend in Life time. Thank you Ganesh sir for everything.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pritam"
        },
        {
            name: "Radhatk Tk",
            content: "I sought admission at the age of 71. At that time, due to sleeplessness and stress, body and mind was so weak. In this short period of one month I feel peace and calm in mind and body, and more flexibility. Sir's effort and hardwork gives us inspiration to try our best.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Radha"
        },
        {
            name: "Khushboo rani",
            content: "I joined 15 days ago, and I’m already feeling a remarkable difference! One of the best things is that these yoga classes run 365 days a year, which is incredibly rare. The instructors are supportive and knowledgeable, making the sessions comfortable and motivating.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khushboo"
        },
        {
            name: "Payal sisodiya",
            content: "It’s been 20 days and I can confidently say that health truly is the top priority here. The yoga classes strike a perfect balance between flexibility, strength, and mindfulness, while Zumba brings a burst of energy. I already feel positive changes in my body and mind.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Payal"
        },
        {
            name: "Priyanka vishwakarma",
            content: "If you’re a beginner like me and looking for a good yoga class, this one is perfect! I absolutely loved the vibe — the instructor is really knowledgeable and makes you feel comfortable throughout the session.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka"
        },
        {
            name: "Sanjay Korde",
            content: "I've been attending for one month, and it's been an incredible journey. The instructor Mr. Ganesh sir is knowledgeable, supportive, and creates a welcoming atmosphere. I've noticed improvements in my flexibility, balance, and overall well-being.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay"
        },
        {
            name: "Rubina Qureshi",
            content: "Ganesh sir is an expert in giving students appropriate methods of improving their health and self confidence. He gets us in a fitness routine which you will love. Once you join you will never give up. I love yoga mudra and I'm here to stay for long!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rubina"
        },
        {
            name: "Rajeshwari R",
            content: "The environment is very welcoming, and the personal attention given to each participant ensures proper posture. I’ve noticed a real improvement in my strength and flexibility since joining. Flexible timings and 365 days workout are huge plus points.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajeshwari"
        },
        {
            name: "Soma Talukdar",
            content: "Ganesh Sir is truly passionate about guiding students on their yoga journey. He always guides us on correct postures and gives personalised attention. His patience, positive energy, and friendly approach make every session enjoyable. Highly recommended!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soma"
        },
        {
            name: "Sainath Shinde",
            content: "Excellent value for money and remains open seven days a week. Flexibility to attend workout sessions is a great benefit. Ganeshan Sir provides personalized attention to everyone, ensuring you get the most out of every session. Professional and versatile environment.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sainath"
        },
        {
            name: "Shraddha Telgote",
            content: "I am really grateful to be part of this yoga class. Sir is very supportive and understanding about my health issues, and he always guides me patiently according to my condition. He truly cares about his students' well-being. Highly recommend this class!",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ShraddhaT"
        },
        {
            name: "Priyanka Kumawat",
            content: "Best yoga class I have ever joined. I have seen so many changes in myself in a month only. Reduced weight, more flexibility, and a proper routine. Yoga instructor Ganesh sir is an awesome teacher who focuses on every student personally.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyankaK"
        },
        {
            name: "Sumit Kumar",
            content: "Top Yoga Class in Ulwe! The teacher is very friendly and highly experienced. Spacious hall, variety of classes including Aerial Yoga, and Zumba included in fees. The environment is very positive, motivating, and beginner-friendly. Clean and hygienic studio.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sumit"
        },
        {
            name: "Rubi singh",
            content: "I had been suffering from severe back pain for five months. After joining Yog Mudra, within just one month, I feel a remarkable improvement. Ganesh sir is very kind, attentive, and always instills confidence. His guidance and energy made a big difference in my recovery.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rubi"
        }
    ];

    // Split testimonials into two groups for two marquee rows
    const firstRow = testimonials.slice(0, testimonials.length / 2);
    const secondRow = testimonials.slice(testimonials.length / 2);

    const MarqueeRow = ({ items, direction = "left", speed = 80 }) => {
        const [isPaused, setIsPaused] = React.useState(false);

        return (
            <div
                className="relative w-full overflow-hidden py-4 select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    animate={isPaused ? {} : { x: direction === "left" ? [0, -100 * items.length + "%"] : [-100 * items.length + "%", 0] }}
                    transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 whitespace-nowrap"
                    style={{ width: "max-content" }}
                >
                {[...items, ...items, ...items].map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="w-[380px] md:w-[450px] bg-white p-6 md:p-8 rounded-[2.5rem] border border-brand-text/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex flex-col gap-5 flex-shrink-0 group hover:border-brand-red-light/20 transition-all duration-500"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-bg-alt border border-brand-text/5">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-brand-text leading-none mb-1">{testimonial.name}</h4>
                                    <div className="flex text-yellow-500 scale-75 origin-left">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-[2rem] text-brand-red-dark/5 font-serif leading-none italic">"</span>
                        </div>
                        <p className="text-brand-text-muted text-sm md:text-base leading-relaxed font-medium whitespace-normal line-clamp-4 italic">
                            "{testimonial.content}"
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
        );
    };

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-brand-bg-alt relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-red-light rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-red-dark rounded-full blur-[140px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-red-light font-bold text-sm tracking-[0.3em] uppercase mb-4 block"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6"
                    >
                        Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light to-brand-red-dark">Hundreds</span> In Ulwe
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2 mb-8"
                    >
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <span className="font-black text-brand-text">4.9/5 Average Rating</span>
                    </motion.div>
                </div>
            </div>

            {/* Testimonials Marquees */}
            <div className="relative flex flex-col gap-2">
                {/* Gradient Fades */}
                <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-brand-bg-alt to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-brand-bg-alt to-transparent z-20 pointer-events-none"></div>

                <MarqueeRow items={firstRow} direction="left" speed={1500} />
                <MarqueeRow items={secondRow} direction="right" speed={1800} />
            </div>
        </section>
    );
};

export default YogaTestimonials;

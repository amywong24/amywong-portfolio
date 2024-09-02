import React from "react";
import "./Hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror", 
            duration: 20,
        }
    },
};

const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Amy Wong</motion.h2>
                    <motion.h1 variants={textVariants}>Welcome to My Website!</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} onClick={() => scrollToSection("#Projects")}>View My Work Here!</motion.button>
                        <motion.button variants={textVariants} onClick={() => scrollToSection("#Contact")}>Contact Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">Software Developer Engineer Data Analyst</motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="Amy Wong" />
            </div>
        </div>
    )
}

export default Hero;
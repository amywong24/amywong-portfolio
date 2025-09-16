import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const variants = {
    initial: {
        x: -100,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const About = () => {
    return (
        <motion.div className="about-me" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="titleContainer" variants={variants}>
                <h1>Who am I?</h1>
            </motion.div>
            <motion.div className="contentContainer" variants={variants}>
                <div className="textContainer">
                    <h4>Get to Know Me!</h4>
                    <p>My name is Amy and I'm a Chinese-American from the San Gabriel Valley in California.
                        I graduated from Cal State LA in May 2024 with a Bachelor's degree in Computer
                        Information Systems, specializing in Information Technology. With a passion
                        for technology and a drive to innovate, I am actively seeking for full-time roles
                        in Frontend Engineering, Android Development, and Data Analytics.</p>
                    <br />
                    <p>I am currently learning more on ReactJS to ensure flexible and efficient user 
                        interfaces in web applications and utilize various JavaScript libraries. I plan to learn 
                        another programming language such as Python and Kotlin and build some projects revolving
                        each languages.</p>
                    <br />
                    <p>When I'm not in the technology world, I enjoy playing video games, learning a new
                        language, and reading books and novels. I am currently learning Korean (한국어)
                        and Mandarin Chinese (中文). I am currently a licensed Pharmacy Technician in CVS Health.</p>
                </div>
                <div className="skillsContainer">
                    <h4>Skills</h4>
                    <div className="skillsetContainer">
                        <div className="skill">HTML/CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">ReactJS</div>
                        <div className="skill">Visual Studio Code</div>
                        <div className="skill">Replit</div>
                        <div className="skill">Github</div>
                        <div className="skill">Git</div>
                        <div className="skill">PowerBI</div>
                        <div className="skill">Tableau</div>
                        <div className="skill">Google Workspace</div>
                        <div className="skill">Microsoft Office</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default About;
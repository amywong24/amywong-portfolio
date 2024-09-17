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
                        I recently graduated from Cal State LA in May 2024 with a Bachelor's degree in Computer
                        Information Systems, specializing in Information Technology. With a passion
                        for technology and a drive to innovate, I am actively seeking for new full-time graduate
                        roles.</p>
                    <br />
                    <p>I have a keen interest towards Software Development (mainly Frontend), Android Development,
                        and Data Analysis. One of the projects I enjoyed working on is MuseVibe, which is
                        a frontend, Spotify-inspired music website where you can listen to music for
                        free. I do plan to continue with that project by learning and utilizing the MERN (MongoDB,
                        ExpressJS, ReactJS, and NodeJS) stack to make the site fully functional. I enjoy
                        creating applications and ensuring that it is user-friendly.</p>
                    <br />
                    <p>When I'm not in the technology world, I enjoy playing video games, learning a new
                        language, and reading books and novels. I am currently learning Korean (한국어)
                        out of interest. I also would like to learn Mandarin Chinese (中文) in the future.</p>
                </div>
                <div className="skillsContainer">
                <h4>My Skills</h4>
                    <div className="skillsetContainer">
                        <div className="skill">HTML/CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">ReactJS</div>
                        <div className="skill">Visual Studio Code</div>
                        <div className="skill">Replit</div>
                        <div className="skill">Github</div>
                        <div className="skill">Git</div>
                        <div className="skill">Microsoft Office (Word, Excel, PowerPoint)</div>
                        <div className="skill">PowerBI</div>
                        <div className="skill">Microsoft Project</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default About;
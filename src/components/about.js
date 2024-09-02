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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra ipsum
                        diam, in cursus quam tincidunt sit amet. Vivamus dictum metus nulla, at
                        lacinia arcu volutpat molestie. Sed sollicitudin risus id est lobortis
                        molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Donec finibus felis ut nisl facilisis posuere. Vivamus
                        ac urna dolor. Nam imperdiet at velit semper lobortis. Quisque a vulputate turpis.
                        Ut ut faucibus lorem.</p>
                </div>
                <div className="imageContainer">
                    <img src="/amy_la.jpg" alt="" />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default About;
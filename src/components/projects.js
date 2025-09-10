import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [{
    id: 1,
    title: "MuseVibe",
    img: "project1.png",
    desc: "A Spotify-inspired music website. Created with React.js and Tailwind CSS.",
    link: "https://github.com/amywong24/MuseVibe",
},
{
    id: 2,
    title: "Simple Weather App",
    img: "project2.png",
    desc: "Need to know where the weather is going? This app has you covered. Created with HTML, CSS, and JavaScript.",
    link: "https://github.com/amywong24/simple-weather-app",
},
{
    id: 3,
    title: "ReadersHub",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Milk_and_Mocha_characters.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum teehee.",
    link: "https://github.com/amywong24/MuseVibe",
},
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => window.open(item.link, "_blank", "noopener noreferrer")}>
                            View via GitHub
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Featured Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects;
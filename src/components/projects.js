import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [{
    id: 1,
    title: "Project 1",
    img: "https://wallpapers.com/images/hd/milk-and-mocha-bears-funny-art-d9obeizxdsoaog9y.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum teehee.",
},
{
    id: 2,
    title: "Project 2",
    img: "https://pbs.twimg.com/profile_images/1785002988853190657/WYvyFHPj_400x400.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum teehee.",
},
{
    id: 3,
    title: "Project 3",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Milk_and_Mocha_characters.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum teehee.",
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
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>View Site Here!</button>
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
import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll ({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="parallax" ref={ref} style={{
            background:
                type === "about"
                    ? "linear-gradient(180deg, #AE847E, #70163c)"
                    : "linear-gradient(180deg, #AE847E, #fcf7ff)",
        }}>
            <motion.h1 style={{y: yText}}>{type === "about" ? "About Me" : "Projects"}</motion.h1>
            <motion.div className="city" style={{ backgroundImage: `url(/city.png)` }}></motion.div>
            <motion.div className="stars" style={{ backgroundImage: `url(/stars.png)`, x: yBg }}></motion.div>
        </div>
    );
};

export default Parallax;
import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {
    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1>Let's Connect & Work Together!</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Email Address</h2>
                    <p>wong.amyk24@gmail.com</p>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone Number</h2>
                    <p>+1 (626) 230-4183</p>
                </motion.div>
            </motion.div>
            <div className="formContainer" variants={variants}>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea placeholder="Message" required rows={8}/>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact;
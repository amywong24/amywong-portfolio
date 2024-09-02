import React, { useRef, useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

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
    const ref = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_opqblrb', 'template_5lgl4k2', ref.current, {
            publicKey: '2VRvrktIUrAbfMpEy',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
            },
          );
      };

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
                <form ref={ref} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" required name="from_name" />
                    <input type="email" placeholder="Email Address" required name="email" />
                    <textarea placeholder="Message" required rows={8} name="message" />
                    <button>Submit</button>
                    {error && "Message not sent. Please check if you filled in all the boxes before trying again."}
                    {success && "Message received! Expect a reply from me in 1-2 days."}
                </form>
            </div>
        </motion.div>
    )
}

export default Contact;
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.img initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 0.5 }} src="./1.png" className="full-name" />
                <div className="socials">
                    <a href="https://www.github.com/amywong24"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon" width="1.5em" height="1.5em" stroke="#02111B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg></a>
                    <a href="https://www.linkedin.com/in/amykwong24/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon" width="1.5em" height="1.5em" stroke="#02111B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg></a>
                    <a href="https://www.instagram.com/amyy.wongg/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon" width="1.5em" height="1.5em" stroke="#02111B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#02111B" fill="none"></rect>
                        <circle cx="12" cy="12" r="3.5" stroke="#02111B" fill="none"></circle>
                        <circle cx="17" cy="7" r="1" fill="white"></circle>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
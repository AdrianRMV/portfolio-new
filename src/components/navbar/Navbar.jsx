import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    ADRIAN RAMIREZ
                </motion.span>
                <div className="socials">
                    <a
                        href="https://www.facebook.com/blackwizart123"
                        target="_blank"
                    >
                        <img src="/facebook.png" alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/arv__01/"
                        target="_blank"
                    >
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="https://github.com/AdrianRMV" target="_blank">
                        <img src="/github.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

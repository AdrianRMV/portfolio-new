import { useRef, useState } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';
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
        },
    },
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: '-100px' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_dfzjax9',
                'template_youe5lj',
                formRef.current,
                'rEccvPp84s9WYSehN'
            )
            .then(
                (result) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let’s work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>Adrianthelawx@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>La Paz B.C.S 📍</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+52 612 3482 563</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                {/* SVG */}
                <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <svg
                        width="450px"
                        height="450px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            strokeWidth={0.2}
                            stroke="orange"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M19.0264 20.993C20.0722 21.0873 21.0036 20.2223 20.9994 19.1864V16.4767C21.0104 16.0337 20.8579 15.6021 20.5709 15.2641C19.7615 14.3107 16.9855 13.7008 15.8851 13.935C15.0273 14.1176 14.4272 14.9788 13.8405 15.5644C12.8062 14.9774 11.8531 14.2682 11 13.4556M8.41019 10.1448C8.9969 9.55929 9.85987 8.96036 10.0428 8.10428C10.2771 7.00777 9.66813 4.24949 8.72131 3.43684C8.38828 3.151 7.96247 2.99577 7.52325 3.00009H4.80811C3.77358 3.00106 2.91287 3.92895 3.00706 4.96919C3.00109 12.5476 8.00134 18.7679 15 20.5073"
                        />
                    </svg>
                </motion.div>

                {/* FORM */}
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <input
                        type="text"
                        required
                        placeholder="Name"
                        name="name"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        name="email"
                    />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <motion.input
                        className="btn-form"
                        type="submit"
                        whileHover={{
                            borderColor: 'orange',
                            backgroundColor: 'orange',
                        }}
                    />
                    {error && 'Error'}
                    {success && 'Success'}
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;

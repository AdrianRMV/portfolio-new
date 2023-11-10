import './contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let&apos; s work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>adrianthelawx@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>La Paz B.C.S 📍</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>6123482563</span>
                </div>
            </div>
            <div className="formContainer">
                <form>
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

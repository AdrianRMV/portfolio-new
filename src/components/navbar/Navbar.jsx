import './navbar.scss';
const Navbar = () => {
    return (
        <div className="navbar">
            {/* SIDEBAR */}
            <div className="wrapper">
                <span>ADRIAN RAMIREZ</span>
                <div className="socials">
                    <a href="">
                        <img src="/facebook.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/youtube.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/github.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

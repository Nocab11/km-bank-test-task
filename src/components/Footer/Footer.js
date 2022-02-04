import React from 'react';
import "./Footer.css";
import home from "../../images/icon/home.png";
import search from "../../images/icon/search.png";
import bag from "../../images/icon/bag.png";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-icon">
                <a href="/" rel="noopener noreferrer" className="active-icon">
                    <img src={home} alt="home" />
                </a>
                <a href="/" rel="noopener noreferrer">
                    <img src={search} alt="search" />
                </a>
                <a href="/" rel="noopener noreferrer">
                    <img src={bag} alt="bag" />
                </a>
            </div>

        </div>
    );
};

export default Footer;
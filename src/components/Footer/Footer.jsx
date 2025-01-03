import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md';

const Footer=()=>{
    return(<div className="footer">
        <div className="left">
            <div className="h3">
                <h3>Savory Bites</h3>
            </div>
            <div className="par">
                <p>" Discover the joy of cooking with our collection of delicious recipes, tips, and culinary inspiration. From quick weeknight meals to gourmet creations, we've got something for every food lover "</p>
            </div>
            <div className="copyright">
                <p>copyright DEVOFS202 – Savory Bites – année 2024/2025</p>
            </div>
        </div>
        <div className="right">
            <div className="follow">
                <p>Follow us for updates and share your creations with #SavoryBites!</p>
            </div>
            <div className="icons">
                <FaFacebook style={{fontSize: '1.1rem' }} className="icon"/>
                <FaInstagram style={{fontSize: '1.1rem' }} className="icon"/>
                <FaTwitter style={{fontSize: '1.1rem' }} className="icon"/>
                <MdOutlineMail style={{fontSize: '1.1rem' }} className="icon"/>
            </div>
        </div>
    </div>)
}
export default Footer;
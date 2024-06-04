import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Sint ullamco fugiat laboris voluptate. Elit mollit dolore deserunt nisi aliquip amet laborum. Voluptate officia nostrud adipisicing aute amet et nisi voluptate. Nisi qui consectetur do consectetur fugiat velit velit. Est ex magna tempor dolor cupidatat laborum aliquip do amet velit officia Lorem in. Esse nisi mollit Lorem consequat officia ut eiusmod dolor. Non excepteur commodo commodo voluptate sint amet quis culpa irure deserunt.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='facebook'/>
                    <img src={assets.linkedin_icon} alt='linkedin'/>
                    <img src={assets.twitter_icon} alt='twitter'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+62-822-9822-5067</li>
                    <li>ringinrp21@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ All Right Reserved.</p>
    </div>
  );
}

export default Footer;

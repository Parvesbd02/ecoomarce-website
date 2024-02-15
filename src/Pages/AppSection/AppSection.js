import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../assets/images/app/01.jpg'
import google from '../../assets/images/app/02.jpg'


const btnText = "Sign up for Free";
const title = "Learn Anytime, Anywhere";
const desc = "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";


const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <Link to='/sing-up' className='lab-btn mb-4'> {btnText}</Link>
                    <h2 className='title'> {title} </h2>
                    <p>{desc}</p>
                </div>
            </div>

            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><Link to='#'><img src={apple} alt="" /></Link></li>
                    <li><Link to='#'><img src={google} alt="" /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AppSection;
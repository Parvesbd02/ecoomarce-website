import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import instructorP from '../../assets/images/instructor/01.png';


const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const expareance = "Years Of Experiences";

const countList = [
    {
    iconName: 'person-circle-outline',
    count: '12600',
    text: 'Marchant Enrolled',
    },
    {
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: 'Certified Courses',
    },
    {
    iconName: 'notifications-circle',
    count: '100',
    text: 'Rewards and GitCards',
    },
    ]
const AboutUs = () => {
    return (
        <div className='instructor-section style-2 padding-tb section-bg-ash'>
            <div className="container">
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            {
                               countList.map((val,index)=>(
                                    <div key={index} className='count-item'>
                                            <div className="count-inner">
                                                <div className="count-icon">
                                                    <i className='{val.iconName}'> </i>
                                                </div>
                                                <div className="count-content">
                                                    <h2><span className='count'><CountUp end={val.count} /></span>
                                                    <span>+</span>
                                                    </h2>
                                                    <p>{val.text}</p>
                                                </div>
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col">
                            <div className="instructor-content">
                                <p className='subtitle'>{subTitle}</p>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                                <Link to='/sing-up' >
                                <button className='lab-btn'>
                                Apply Now
                                </button>
                                </Link>
                            </div>
                        </div>


                        <div className="col">
                            <div className="instructor-thumb">
                                <img src={instructorP} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
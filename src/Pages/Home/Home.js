import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategory from '../HomeCategory/HomeCategory';
import OurProducts from '../OurProducts/OurProducts';
import Register from '../Login/Register';
import Location from '../Location/Location';
import AboutUs from '../AboutUs/AboutUs';
import AppSection from '../AppSection/AppSection';
import Sponsor from '../Sponsor/Sponsor';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeCategory></HomeCategory>
           <OurProducts></OurProducts>
           <Register></Register>
           <Location></Location>
           <AboutUs></AboutUs>
           <AppSection></AppSection>
           <Sponsor></Sponsor>
        </div>
    );
};

export default Home;
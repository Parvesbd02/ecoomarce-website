import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png'

const Header = () => {
    const [menuToggle,setMenuToggle] = useState(false);
    const [socialToggle,setSocialToggle]=useState(false);  
    const [headerFixed,setheaderFixed]=useState(false);  

    //addevent listener

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 200){
            setheaderFixed(true)
        }
        else{
            setheaderFixed(false)
        }
    })
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeinUp" : ""}`}>
            {/* header top start */}
            <div className={`header-top d-md-none  ${socialToggle ? "open" : ""}`} >
                <div className="container">
                    <div className="header-top-area">
                        <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to='/login'><span>Login</span></Link>
                    </div>
                </div>
            </div>

            {/* header bottom */}
            <div className='header-bottom'>
                <div className="container">
                    <div className="header-wrapper">
                        {/* logo */}
                        <div className="logo-search-act">
                            <div className="logo">
                                <Link to='#'>
                                <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        {/* menu-area */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><Link to='/shop'>shop</Link></li>
                                    <li><Link to='/blogs'>Blogs</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </div>

                            {/* signin & login */}
                            
                            <Link to='signup' className='lab-btn me-3 d-none d-md-block'> Create Account</Link>
                                <Link to='login' className='d-none d-md-block'>Login</Link>
                                

                                {/* menu toggler */}
                                <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                {/* social-logo */}
                                <div className='ellepsis-bar d-md-none'
                                onClick={()=>setSocialToggle(!socialToggle)}>
                                <ion-icon name="person-circle-outline"></ion-icon>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
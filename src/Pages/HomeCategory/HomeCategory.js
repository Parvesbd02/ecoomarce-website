import React from 'react';
import { Link } from 'react-router-dom';


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryProducts = [
    {
        imgUrl: 'https://i.ibb.co/85Pn9C6/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'https://i.ibb.co/QDRZz6H/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'https://i.ibb.co/5TkVRxd/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'https://i.ibb.co/GpgxWVf/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'https://i.ibb.co/JpQgH0Y/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'https://i.ibb.co/60sRNfC/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]



const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className="container">
                {/* section header */}
                <div className="section-header text-center">
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>

                {/* sectio card */}

                <div className="section-wrapper">
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        {
                           categoryProducts.map((product, index) => (<div key={index} className='col'>
                                <Link to='/shop' className='category-item'>
                                    <div className="category-inner">
                                        {/* image thumbnail */}
                                        <div className="category-thumb">
                                            <img src={product.imgUrl} alt="" />
                                        </div>
                                        {/* content */}
                                        <div className="category-content">
                                            <div className="cate-icon">
                                                <i className={product.iconName}></i>
                                            </div>
                                            <Link to='/shop'><h6>{product.title}</h6></Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>))
                        }
                    </div>
                    <div className='text-center mt-5'>
                    <Link to='/shop'><span className='lab-btn'>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;
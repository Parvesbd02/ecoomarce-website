import React, { useState } from 'react';
import shape1 from '../../assets/images/shape-img/icon/01.png';
import shape2 from '../../assets/images/shape-img/icon/02.png';
import Ratting from '../Ratting/Ratting';
import { Link } from 'react-router-dom';


const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'https://i.ibb.co/fv0yhkp/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'https://i.ibb.co/rdX9Mcy/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'https://i.ibb.co/1vd8GwH/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'https://i.ibb.co/D4FzZR2/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'https://i.ibb.co/80Vg2XN/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'https://i.ibb.co/MnDG3Lh/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'https://i.ibb.co/HKyv0KL/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'https://i.ibb.co/3m8dTXJ/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]
const OurProducts = () => {
    const [items, setItems] = useState(ProductData);

    const filterItem = (categItem) => {
            const updateItem = ProductData.filter((curElem)=>{
                return curElem.cate ===  categItem;
            })
            setItems(updateItem);
    }
    return (
        <div className='course-section style-3 padding-tb'>
            <div className="course-shape one">
                <img src={shape1} alt="" />
            </div>
            <div className="course-shape two">
                <img src={shape2} alt="" />
            </div>
            {/* main=-section */}
            <div className="container">
                {/* section=header */}
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className='course-filter-group'>
                        <ul className='lab-ul'>
                            <li onClick={() => setItems(ProductData)}>All</li>
                            <li onClick={() => filterItem('Shoes')}>Shoes</li>
                            <li onClick={() => filterItem('Bags')}>Bags</li>
                            <li onClick={() => filterItem('Phones')}>Phones</li>
                            <li onClick={() => filterItem('Beauty')}>Beauty</li>
                        </ul>
                    </div>
                </div>
                {/* section=body */}
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {
                            items.map((product) => <di key={ProductData.id} className='col'>
                                <div className="course-item style-4">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={product.imgUrl} alt="" />
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <Link href="#">{product.cate}</Link>
                                                </div>
                                                <div className="course-review">
                                                    <Ratting></Ratting>
                                                </div>
                                            </div>
                                        </div>

                                        {/* content */}
                                        <div className="course-content">
                                            <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                                            <div className="course-footer">
                                                <div className="course-auto">
                                                    <Link to='#' className='ca-name'>{product.brand}</Link>
                                                </div>
                                                <div className="course-price">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </di>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
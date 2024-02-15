import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../Ratting/Ratting';


const ProductCard = ({ gridList, products }) => {
    return (
        <div className={`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list"}`}>
            {
                products.map((product, i) => (
                    <div key={i} className='col-lg-4 col-md-6 col-12'>
                        {/* product-image */}
                        <div className="product-item">
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}>
                                        <ion-icon name="eye"></ion-icon>
                                    </Link>
                                    <Link to="#">
                                        <ion-icon name="heart"></ion-icon>
                                    </Link>
                                    <Link to='/cart-page'><ion-icon name="cart"></ion-icon></Link>
                                </div>
                            </div>

                            {/* product-content */}
                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p>
                                    <Ratting></Ratting>
                                </p>
                                <h6>
                                    ${product.price}
                                </h6>
                            </div>
                        </div>
                        {/* list style */}
                        <div className="product-list-item">
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}>
                                        <ion-icon name="eye"></ion-icon>
                                    </Link>
                                    <Link to="#">
                                        <ion-icon name="heart"></ion-icon>
                                    </Link>
                                    <Link to='/cart-page'><ion-icon name="cart"></ion-icon></Link>
                                </div>
                            </div>

                            {/* product-content */}
                            <div className="product-content">
                                <h5>
                                    <Link to={`/Shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p>
                                    <Ratting></Ratting>
                                </p>
                                <h6>
                                    ${product.price}
                                </h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductCard;
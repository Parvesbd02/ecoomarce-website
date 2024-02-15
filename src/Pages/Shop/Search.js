import React, { useState } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';

const Search = ({ products, gridList }) => {
    // console.log(products);

    // Filter the products based on search term
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));



    return (
        <div className="widget widget-search">
            <form className="search-wrapper mb-3">
                <input type="search" className="search" id="search" placeholder='Search...' defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit">
                    <ion-icon name="search"></ion-icon>
                </button>
            </form>

            <div>
                {
                    searchTerm && filteredProducts.map((product) => (
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className="d-flex gap-3 p-2">
                                <div className='pro-thumb h-25'>
                                    <img src={product.img} width={70} className='flex-{grow|shrink}-0' alt="" />
                                </div>
                            </div>
                            <div className="product-content">
                                <p>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </p>
                                <h6>
                                    ${product.price}
                                </h6>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;
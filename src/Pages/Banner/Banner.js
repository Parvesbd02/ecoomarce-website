import React, { useState } from 'react';
import productsData from '../../products.json'
import { Link } from 'react-router-dom';
import SelectCategory from '../SelectCategory/SelectCategory';


const title = (
    <h2>Search Your One <span>Thousand</span> of Products</h2>
)

const desc = " We have the Largest Collection of Products"
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];
const Banner = () => {
    const [searchInput,setSearchInput] = useState("");
    const [filterProducts,setFilterProducts] = useState("");

    // console.log(productsData);

    // search functionality
    const handleSearch = e  =>{
        setSearchInput(e.target.value);

        // filter products data base on search
        const filtered = productsData.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));

        setFilterProducts(filtered);
        
    }
    return (
        <div className='banner-section style-4'>
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form >
                        <SelectCategory select={'all'}></SelectCategory>
                        <input type="text" name='search' id='search' placeholder="Search your Product" value={searchInput} onChange={handleSearch} />
                        <button type="submit"><i className="icofont-search"></i></button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul'>
                        {
                            searchInput && filterProducts.map((product,index)=> <li key={index}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
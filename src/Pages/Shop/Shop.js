import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom';

import data from '../../products.json'
import ProductCard from './ProductCard';
import Pagination from '../Pagination/Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = 'Showing 01-12 of 139 Results'
const Shop = () => {

    const [gridList, setGridList] = useState(true);
    const [products,setProducts] = useState(data)

    // pagination

    const [currentPage,setCurrentPage] = useState(1);
    const productPerPage = 12;

    const indexOfLastProduct =currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct -productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct )
    

    const paginate = (pageNumber)=> setCurrentPage(pageNumber);


    /* filter product base on category */
    const [selectCategory,setSelectCategory] = useState('All')
     const menuItem = [...new Set(data.map((Val) => Val.category) )];

     const filterItem = (curCat) => {
       const newItem = data.filter((newVal)=>{
        return newVal.category === curCat;
       })

       setSelectCategory(curCat);
       setProducts(newItem);
     }
    return (
        <div>
            <PageHeader title='Our Shop Page' curPage='Shop'></PageHeader>
            {/* shop page content */}

            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>

                                {/* layout here */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                                        <Link className='grid' onClick={() => setGridList(!gridList)}>
                                            <ion-icon name="grid"></ion-icon>
                                        </Link>
                                        <Link className='list' onClick={() => setGridList(!gridList)}>
                                        <ion-icon name="menu"></ion-icon>
                                        </Link>
                                    </div>
                                </div>
                                {/* product-card */}
                                    <div>
                                        <ProductCard gridList={gridList} products={currentProducts}></ProductCard>
                                    </div>
                                    <Pagination productPerPage={productPerPage}
                                    totalProduct={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}></Pagination>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} gridList={gridList}></Search>
                                <ShopCategory
                                filterItem={filterItem}
                                setItem={setProducts}
                                menuItems={menuItem}
                                setProducts={setProducts}
                                selectCategory={selectCategory}
                                ></ShopCategory>
                                <PopularPost></PopularPost>
                                <Tags></Tags>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
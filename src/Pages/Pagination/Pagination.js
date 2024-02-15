import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = ({productPerPage,totalProduct,paginate,activePage}) => {

    const pageNumbers = [];
    for(let  i=1;i<=Math.ceil(totalProduct/productPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        
            <ul className='default-pagination lab-ul'>
                <li>
                    <Link to={'#'} onClick={()=>{
                        if(activePage < pageNumbers.length){
                            paginate(activePage - 1)
                        }
                    }}>
                        <ion-icon name="chevron-back"></ion-icon>
                    
                    </Link>
                </li>
                {
                    pageNumbers.map((Number,index)=>(
                        <li key={index}  className={`page-item ${Number===activePage?'bg-warning':''}`}>
                             
                            <button onClick={()=>paginate(Number)} className='bg-transparent'>{Number}</button>
                            {/* <Link to={'/'} >{Number}</Link> */}
                        </li>
                    ))
                }

<li>
                    <Link to={'#'} onClick={()=>{
                        if(activePage < pageNumbers.length){
                            paginate(activePage + 1)
                        }
                    }}>
                        <ion-icon name="chevron-forward"></ion-icon>
                    
                    </Link>
                </li>
            </ul>
        
    );
};

export default Pagination;
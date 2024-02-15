import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const SingleProduct = () => {
    // const [product, setProduct] = useState([]);
    const {id} = useParams();
   
   useEffect(()=>{
    fetch("../../products.json")
    .then(res=>res.json())
    .then(data => console.log(data));
   },[])
    

    return (
        <div>

        </div>
    );
};

export default SingleProduct;
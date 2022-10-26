import React from 'react'
import { useState } from "react";
import './styles/productInfo.css'

const ProductInfo = ({product}) => {

const [counter, setCounter] = useState(1)

const handleMinus = () =>{
    if(counter - 1 > 0){
        setCounter(counter - 1)
    }
}

const handlePlus = () =>{
    setCounter(counter + 1)
}


  return (
    <article className='product_info'>
        <h2 className='product_info_title'>{product?.title}</h2>
        <p className='product_info_description'>{product?.description}</p>
        <footer className='product_info_footer'>
            <div className='product_info_price_container'>
                <h3 className='product_info_price_label'>Price</h3>
                <span className='product_info_price_number'>{product?.price}</span>
            </div>
            <div className='product_info_quantity_container'>
                <h3 className='product_info_quantity_label'>Quantity</h3>
                <div className='counter'>
                    <div className='counter_minus' onClick={handleMinus}>-</div>
                    <div className='counter_number'>{counter}</div>
                    <div className='counter_plus' onClick={handlePlus}>+</div>
                </div>
            </div>
                <button className='product_info_btn'>Add to Cart <i className="product_info_icon fa-solid fa-cart-shopping"></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo
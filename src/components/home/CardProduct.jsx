import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({ product }) => {

const navigate = useNavigate()




const handleNavigation = () =>{
    navigate(`/product/${product.id}`)
}

const handleAddCart = e => {
    e.stopPropagation()
}

    return (
        <article onClick={handleNavigation} className='product'>
            <header className='product_header'>
                <img src={product.productImgs[0]} alt="" />
            </header>
            <div className='product_body'>
                <h3 className='product_title'>{product.title}</h3>
                <div>
                    <span className='product_price_label'>Price</span>
                    <p className='product_price_number'>{product.price}</p>
                </div>
                <button onClick={handleAddCart} className='product_icon_container'>
                    <i className="product_icon fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <article >Show More Info</article>
        </article>
    )
}

export default CardProduct
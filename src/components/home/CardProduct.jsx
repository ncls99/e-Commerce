import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'
const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigation = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }


    return (
        <article onClick={handleNavigation} className='product'>
            <header className='product_header'>
                {/* <div className='product_img_container'> */}
                <img className='product_img' src={product.productImgs[0]} alt="" />
                {/* </div> */}
            </header>
            <div className='product_body'>
                <h3 className='product_title'>{product.title}</h3>
                <div className='product_price'>
                    <span className='product_price_label'>Price</span>
                    <p className='product_price_number'>{product.price}</p>
                </div>
                <button onClick={handleAddCart} className='product_icon_container'>
                    <i className="product_icon fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </article>
    )
}

export default CardProduct
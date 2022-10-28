import React from 'react'
import './styles/purchases.css'

const CardPurchase = ({ purchase }) => {


  return (
    <article className='purchase_container'>
        <div className='purchase_detail_container'>
            {
                purchase.cart.products.map(product => (
                    <section className='product_purchased' key={product.id}>
                        <h3>{product.title}</h3>
                        <div>{product.productsInCart.quantity}</div>
                        <div>${product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase
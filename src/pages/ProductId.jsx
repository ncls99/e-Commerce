import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductInfo from '../components/poductId/ProductInfo'
import SimilarProducts from '../components/poductId/SimilarProducts'
const ProductId = () => {

  const [product, setProduct] = useState()
  
  
  const { id } = useParams()
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])
  




 
  return (
    <div>
      <ProductInfo product={product} />
      <SimilarProducts product={product}/>
    </div>
  )
}

export default ProductId
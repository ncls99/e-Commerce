import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import './styles/filterByCategory.css'


const FilterCategory = () => {

const [categories, setCategories] = useState()

useEffect(() => {
const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories' 
axios.get(URL)
    .then(res => setCategories(res.data.data.categories))
    .catch(err => console.log(err))
}, [])

const dispatch = useDispatch()

const handleFetchCategory = id => {
    if(id){
        dispatch(getProductByCategory(id))
    }else {
        dispatch(getAllProducts())
    }
}
    
  return (
    <article className='filter_category_container'>
        <h3 className='filter_title' >Category</h3>
        <ul className='filter_list'>
            <li className='filter_item' onClick={() => handleFetchCategory()}>All Products</li>
            {
                categories?.map(category => (
                    <li className='filter_item' onClick={() => handleFetchCategory(category.id)} 
                    key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory
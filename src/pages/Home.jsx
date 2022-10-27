import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])

  useEffect(() => {
    if (inputText !== '' && products) {
      const cllbck = (product) => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cllbck))
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])

  const cllBckFilterPrice = (product) => {
    return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
  }

  return (
    <main className='home'>
      <InputSearch
        inputText={inputText}
        setInputText={setInputText}
      />
      <FilterPrice setFilterByPrice={setFilterByPrice}/>
      <FilterCategory />
      <div className='home_container'>
        {
          filterByText?.filter(cllBckFilterPrice).map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home
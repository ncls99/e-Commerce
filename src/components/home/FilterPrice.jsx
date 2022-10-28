import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({ setFilterByPrice }) => {



    const handleSubmit = (e) => {
        e.preventDefault()
        const to = +e.target.to.value
        const from = +e.target.from.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }


    return (
        <form className='form_filter_price' onSubmit={handleSubmit}>
            <h3>Filter by price</h3>
            <div className='filter_textbox_container'>
                <div className='input_container'>
                    <input className='input_Filter_Price' type="text" id='from' placeholder='From?'/>
                </div>
                <div className='input_container'>
                    <input className='input_Filter_Price' type="text" id='to' placeholder='To?' />
                </div>
            </div>

            <button className='filter_button'>Filter</button>
        </form>
    )
}

export default FilterPrice
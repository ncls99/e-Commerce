import React from 'react'

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
        <form onSubmit={handleSubmit}>
            <h3>Price</h3>
            <div>
                <label htmlFor="from">From</label>
                <input type="text" id='from' />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="text" id='to' />
            </div>
            <button>Filter</button>
        </form>
    )
}

export default FilterPrice
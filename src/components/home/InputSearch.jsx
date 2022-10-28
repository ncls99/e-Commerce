import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({ setInputText, inputText }) => {

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (

    <div className='formGroupHomeSearch'>
      <input value={inputText} onChange={handleChange} type="text" className='formInputHomeSearch' placeholder='What are you looking for?' 
      />
    </div>
  )
}

export default InputSearch
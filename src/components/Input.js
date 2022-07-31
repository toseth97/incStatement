import React from 'react'

const Input = ({ value, setValue, description, setDescription }) => {
  return (
    <main className='input_main'>
        <form className=' input_form' onSubmit={(event) => event.preventDefault()}>
          <select>
            <option>
              Income
            </option>
            <option>
              Expense
            </option>
          </select>
          <input  
            className='addDescription'
            type= "text"
            value={description}
            onChange = {(event) => setDescription(event.value.target)}
            placeholder = "Add Description"
          />
          <input  
            className='addValue'
            type= "number"
            value={value}
            onChange = {(event) => setValue(event.value.target)}
            placeholder = "Add Amount"
          />          
          <i class='bx bxs-check-circle'></i>
        </form>

    </main>
  )
}

export default Input
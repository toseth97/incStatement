import React, { useState , useRef, useEffect} from 'react'

const Input = ({notification, feed, value, setValue, description, setDescription, setSelection, selection, handleSubmit }) => {

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  },[feed])

  const changeSelection = (selection) => {
    setSelection(selection)
  }

 
  return (
    <main className='input_main'>
        <form className=' input_form' onSubmit={(event) => event.preventDefault()}>
          <select 
            value={selection}
            onChange={(event) => changeSelection(event.target.value) }>

            <option>
              income
            </option>
            <option>
              expense
            </option>
          </select>
          <input  
            className='addDescription'
            type= "text"
            ref = {inputRef}
            value={description}
            onChange = {(event) => setDescription(event.target.value)}
            placeholder = "Add Description"
          />
          <input  
            className='addValue'
            type= "number"
            value={value}
            onChange = {(event) => setValue(event.target.valueAsNumber)}
            placeholder = "Add Amount"
          />          
          <i className='bx bxs-check-circle submit'
          onClick={handleSubmit}></i>
        </form>
        {notification === "success" ? <p className='notification_success'> Successfully added to list</p>: notification === "error" ? <p className='notification_error'>Oops.... There was an error, make sure you fill all inputs</p>: null}

    </main>
  )
}

export default Input
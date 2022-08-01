import React from 'react'
import { format } from 'date-fns'

export const AllExpense = ({ current , handleDelete}) => {
  
  return (
    <main className='allExpense_main each_report'>
        <p className='description'>{current.description}</p>
        <p className='value'>{(current.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <i className='bx bxs-trash btn' onClick={() => handleDelete(current.id)}></i>
        <p className='date'>{format(new Date(), "MMMM dd")}</p>
    </main>
  )
}

export const AllIncome = ({ current , handleDelete}) => {
    return (
      <main className='allIncome_main each_report'>
          <p className='description'>{current.description}</p>
          <p className='value'>{(current.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          <i className='bx bxs-trash btn' onClick={() => handleDelete(current.id)}></i>
          <p className='date'>{format(new Date(), "MMMM dd")}</p>
      </main>
    )
}


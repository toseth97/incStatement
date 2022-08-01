import React from 'react'
import {AllIncome, AllExpense} from './AllExpense'

const Income = ( { income, handleDelete } ) => {
  return (
    <main className='Income_main_report'>
        <h2>Income</h2>
        <div>
            {income.map(current => (
                <AllIncome key = {current.id} current = {current} handleDelete = {handleDelete} />
            ))}
        </div>
    </main>
  )
}

export default Income
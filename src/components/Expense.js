import React from 'react'
import {AllExpense} from './AllExpense'

 const Expense = ({ expense, handleDelete }) => {
  return (
    <main className='Expense_main_report'>
    <h2>Expense</h2>
    <div>
        {expense.map(current => (
            <AllExpense key = {current.id} current = {current} handleDelete = {handleDelete}/>
        ))}
    </div>
  </main>
  )
}
export default Expense

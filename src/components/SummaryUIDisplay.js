import React from 'react'

const SummaryUIDisplay = ({balance, incomepaercentage, expenseTotal}) => {
  return (
    <main className='summaryUI'>
        <section>
            <div className='bal'>
                <h2>Balance:</h2>
                <h2>&#8358; 1000</h2>
            </div>
            <div className='inc_exp_sum'>
              <div className='inc_sum'>
                <p>Total Income:</p>
                <p>?</p>
              </div>
              <div className='exp_sum'>
                <p>Total Expense:</p>
                <p>?</p>
              </div>
              
            </div>
        </section>
    </main>
  )
}

export default SummaryUIDisplay
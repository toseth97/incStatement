import React from 'react'

const SummaryUIDisplay = ({percentage, balance, totalExpense, totalIncome}) => {
  return (
    <main className='summaryUI'>
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='circle3'></div>
      <div className='circle4'></div>
      <div className='circle5'></div>
      <div className='social_div'>
              <div className='social'>
                <a href='https://www.linkedin.com/in/tobiloba-lawal-1097a6132/' target="_blank" className='links'>
                <i className='bx bxl-linkedin'></i>
                </a>
              </div>
              <div className='social'>
                <a href='https://twitter.com/Toseth_official' target="_blank" className='links'>
                <i className='bx bxl-twitter' ></i>
                </a>
              </div>
              <div className='social'>
                <a href='https://github.com/toseth97?tab=repositories' target="_blank" className='links'>
                  <i className='bx bxl-github'></i>  
                </a>
              </div>
            </div>
        <section>
            
            <div className='bal'>
                <h2>Operating Income:</h2>
                <h2>&#8358; {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </div>
            <div className='inc_exp_sum'>
              <div className='inc_sum'>
                <p>Financial Income:</p>
                <p>&#8358; {totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
              <div className='exp_sum'>
                <p>Financial Expense:</p>
                <p>&#8358; {totalExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
            </div>
            <div className='cost_percentage'>
                <div className= {percentage > 0 ? "positive" : "negative"}>
                  <p>{isNaN(percentage) ? 0 : percentage === Infinity ? 100 : (Math.round(percentage * 100) / 100).toFixed(2)}%</p>
                </div>
              </div>
        </section>
    </main>
  )
}

export default SummaryUIDisplay
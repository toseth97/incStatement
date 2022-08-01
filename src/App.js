import React, { useEffect } from "react";
import SummaryUIDisplay from "./components/SummaryUIDisplay";
import Input from "./components/Input";
import { useState } from 'react'
import data from "./components/data";
import './index.css';
import Expense from "./components/Expense";
import Income from "./components/Income";

function App() {
  const [description, setDescription] = useState("")
  const [selection, setSelection]= useState("income")
  const [value, setValue] = useState("")
  const [feed, setFeed] = useState(localStorage.getItem("feed") ? JSON.parse(localStorage.getItem("feed")) : [] )
  const [isloading, setIsLoading] = useState(true)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [notification, setNotification] =useState("none")
  const [balance, setBalance] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const expense = feed.filter(current => current.type === "expense")
  const income = feed.filter(current => current.type === "income")

// This loads data from localstorage to feed.
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2500)
  }, [])
 
//This handle calculation, set expense and income value and also balances
useEffect(()=>{
  //collect all amount both in expense and income as an array.
  let expValue = expense.map(current => current.value )
  let incValue = income.map(current => current.value )

  let inc = 0
  let exp = 0
  


  //loops through expvalue and incValue to add the values and add to exp and inc variable respectively
  for(let i = 0 ; i < incValue.length ; i++){
    inc += incValue[i]
  }
  for(let i = 0 ; i < expValue.length ; i++){
    exp += expValue[i]
  }

  let percent = ((inc-exp)/exp) * 100
  //set totalExpense
  setTotalExpense(exp)
  //set totalIncome
  setTotalIncome(inc)
  //set balance
  setBalance(inc - exp)
  setPercentage(percent)
  console.log(inc, exp, inc-exp ,percent)

  localStorage.setItem("feed", JSON.stringify(feed))
  
}, [feed])
  
 



//This is the configuation for submit button
  const handleSubmit = () => {
    if(value && description && selection){
      const id = feed.length ? feed[feed.length - 1].id + 1 : 1
      const newData = {id: id,
      type: selection, value:value ,  description: description}
      console.log(id)
      setFeed([...feed, newData])
      setValue("")
      setDescription("")
      setSelection("income")
      setNotification("success")
      setTimeout(()=>{
        setNotification("none")
      }, 2500)
    }else{
      setNotification("error")
    }
    
  }

  //handle submit when Enter key is pressed
  const keysubmit = event => {
    if(event.key === "Enter"){
      handleSubmit()
    }
  }
  
useEffect(() => {
  document.addEventListener("keypress",keysubmit)
  return () => document.removeEventListener("keypress", keysubmit)
})

 
  // Deletes from list
  const handleDelete = (id) => {
    const newFeeds = feed.filter(current => current.id !== id)
    setFeed(newFeeds)    
  }


  return (
    <div className="App">
      {isloading ? <div className="isloading_main">
        <div className="loading"></div>
        <h2>Fetching Data From Source, Please wait....</h2>
      </div> : (<>
          <SummaryUIDisplay balance = {balance} totalExpense = {totalExpense} totalIncome = {totalIncome} percentage = {percentage} />
        <Input notification={notification} feed = {feed} description = {description} setDescription = {setDescription} value = {value}
        setValue = {setValue} selection = {selection} setSelection = {setSelection} handleSubmit = {handleSubmit} />
        {feed.length ? <div className="display_report">
          <Income income = {income.reverse()} handleDelete = {handleDelete} />
          <Expense expense={expense.reverse()} handleDelete = {handleDelete} />
        </div> : <p className="emptyData">Nothing to display here...</p>}</>)}
    </div>
  );
}


export default App;

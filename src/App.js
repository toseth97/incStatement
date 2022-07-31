import React from "react";
import SummaryUIDisplay from "./components/SummaryUIDisplay";
import Input from "./components/Input";
import { useState } from 'react'
import './index.css';

function App() {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")


  return (
    <div className="App">
      <SummaryUIDisplay />
      <Input description = {description} setDescription = {setDescription} value = {value}
      setValue = {setValue}  />

    </div>
  );
}

export default App;

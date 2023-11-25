import "./Tosbi.css"
import React, { useState } from 'react'

export default function () {
  let [value, setValue]= useState(0)
  let [value1, setValue1]= useState(0)
  let [value2, setValue2] = useState(0)

  let count= () => {
      value < 33 ? setValue (value = value+1) : setValue(value)
  }

  let count1= () => {
    value1 <33 ? setValue1 (value1 = value1+1) : setValue(value)
}

let count2=()=>{
  value2  < 34 ? setValue2 (value2= value2 + 1) : setValue(value)
}

let reset =()=>{
  setValue(0)
  setValue1(0)
  setValue2(0)
}

const allCount = (value + value1 + value2)

  return (
    <div className='parents'>
      <div className="child">

      <h1>Total:  {allCount}</h1>
      <h1>{value}</h1>
      
        <button onClick={count}>Shuhanallah</button>
        
        <h1>{value1}</h1>
        <button onClick={count1}>Alhamdulillah</button>
        
        <h1>{value2}</h1>
        <button onClick={count2}>AllahuAkbar</button>
        <br />
        <button onClick={reset}>Reset & ReStart</button> 

        </div>
    </div>
  )
}

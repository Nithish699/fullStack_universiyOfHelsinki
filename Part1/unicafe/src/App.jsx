import { useState } from 'react'

const Header=()=>{
  return(
    <h1>give feedback </h1>
  )
}

const Button=({onClick,name})=>{
  return(
  <button onClick={onClick}>{name}</button>
  )
}

const Statistics=({good,neutral,bad})=>{
  const all = good + neutral + bad
  const average= (good*1+ neutral*0 + bad*-1)/all
  const positivePrcnt = (100)*good/all
  if(all===0){
    return(
      <div>
      <p> No feedback given </p>
      </div>
    )
  }
  return(
  <div> 
  <h2>statistics</h2>
  <span>good {good}</span><br />
  <span>neutral {neutral}</span><br />
  <span>bad {bad}</span><br />
  <span>all {all}</span> <br />
  <span>average {average}</span> <br />
  <span>positive {positivePrcnt} %</span>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button onClick={()=>setGood(good+1)} name="good" />
      <Button onClick={()=>setNeutral(neutral+1)} name="neutral" />
      <Button onClick={()=>setBad(bad+1)} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App;
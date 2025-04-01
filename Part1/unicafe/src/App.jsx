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

const StatisticLine=({text,value})=>{
  return(
  
  <tr> 
    <td style={{ paddingRight: '10px' }}>{text}</td> 
    <td>{value}</td>
  </tr>
    
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
  return (
    <div>
      <h2>statistics</h2>
      <table style={{ borderCollapse: 'collapse', width: 'auto' }} >
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positivePrcnt} %`} />
        </tbody>
      </table>
    </div>
  );
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
import { React, useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Button = props => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Statistics = props => {
  return(
    <div>
      <h1>{props.name}</h1>
      <p>Total amount of good feedback:{props.feedback1} </p>
      <p>Total amount of neutral feedback:{props.feedback2}</p>
      <p>Total amount of bad feedback: {props.feedback3}</p>
      <p>Total amount of feedbacks: {props.all}</p>
      <p>The average of all feedback is: {props.average} </p>
      <p>The percentage of positive feedback is: {props.positive} %</p>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValueGood = (good) => setGood(good)
  const setValueNeutral = (neutral) => setNeutral(neutral)
  const setValueBad = (bad) => setBad(bad)
  const all = good + neutral + bad
  const average = (good +(-bad))/all
  const positive = Math.round((good/all)*100)

  return (
    <div>
      <Header name="Welcome, please leave us a feedback!"/>
      <Button handleClick={() => setValueGood(good + 1)} text='good'/>
      <Button handleClick={() => setValueNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setValueBad(bad + 1)} text='bad'/>
      <Statistics name="Overall statistics" 
        feedback1={good} feedback2={neutral} feedback3={bad} all={all}
        average={average} positive={positive} 
        />

    </div>
  )
}

export default App

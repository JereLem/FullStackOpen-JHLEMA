import { React, useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Button = props => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const StatisticsLine = ({text, value}) =>{
  if (text === 'pos') {
    return (
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
      )
  }
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral, bad}) => {
  let sum = good + neutral + bad
  let average = (good - bad)/sum
  let positive = Math.round((good/sum)*100)

  if (sum === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return(
      <table>
        <tbody>
          <StatisticsLine text='Total amount of good feedback:' value={good} />
          <StatisticsLine text='Total amount of neutral feedback:' value={neutral} />
          <StatisticsLine text='Total amount of bad feedback:' value={bad} />
          <StatisticsLine text='Total amount of feedbacks:' value={sum} />
          <StatisticsLine text='The average of all feedback is:' value={average} />
          <StatisticsLine text='The percentage of positive feedback is:' value={positive}/>
        </tbody>
      </table>
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

  return (
    <div>
      <Header name="Welcome, please leave us a feedback!"/>
      <Button handleClick={() => setValueGood(good + 1)} text='good'/>
      <Button handleClick={() => setValueNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setValueBad(bad + 1)} text='bad'/>
      <Header name="Overall statistics"/>
      <Statistics name="Overall statistics" good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

import { useState } from 'react'

const Button = props => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(6));
  const [maxvote, setVotedValue] = useState(0);

  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
  }

  const setToVote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
    if (points[selected] >= points[maxvote]) {
      setVotedValue(selected);
    }
  }

  const setToSelected = () => {
    const randomNumber = generateRandomInteger(anecdotes.length)
    setSelected(randomNumber)
  }

  return (
    <div>
      <h1>Programming anecdotes!</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has: {points[selected]} votes.</p>
      <Button handleClick={setToSelected} text='Next random anecdote'/>
      <Button handleClick={setToVote} text='Vote for this anecdote'/>
      <h1>The anecdote with the most votes is:</h1>
      <p>{anecdotes[maxvote]}</p>
      <p>It has:{points[maxvote]} votes.</p>
    </div>
  )
}

export default App

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const submit = (props) =>{
    props.preventDefault();
    setPersons(persons.concat({name: newName}));
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submit}>
        <div>
          name:{" "}
          <input value={newName} onChange={(props) => setNewName(props.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <p key={person.name}> {person.name} </p>
        )}
      </ul>
      ...
    </div>
  )

}

export default App;

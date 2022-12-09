import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123-456-7890' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const submit = (props) =>{
    props.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {

      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({name: newName, phone: newPhone}));
    setNewName("");
    setNewPhone("");
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
          phone:{" "}
          <input value={newPhone} onChange={(props) => setNewPhone(props.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <p key={person.name}> {person.name} {person.phone} </p>
        )}
      </ul>
    </div>
  )

}

export default App;

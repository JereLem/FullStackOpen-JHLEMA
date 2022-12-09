import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123-456-7890' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const filteredPersons = persons.filter(person => person.name.includes(searchQuery));

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
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <form>
        <div>
          search:{" "}
          <input value={searchQuery} onChange={(props) => setSearchQuery(props.target.value)} />
          <p>
          {filteredPersons.map(person =>
            <p key={person.name}> {person.name} {person.phone} </p>
          )}
          </p>
          
        </div>
      </form>
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
    </div>
  )

}

export default App;

import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123-456-7890' }
    ])
const [newName, setNewName] = useState('')
const [newPhone, setNewPhone] = useState('')
const [searchQuery, setSearchQuery] = useState('')

const hook = () => {
  axios.get('http://localhost:3001/persons')
  .then(response => {
  setPersons(response.data)
});
}

useEffect(hook, [])

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
<SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
<PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} submit={submit} />
<Phonebook persons={filteredPersons} />
</div>
)

}

const SearchFilter = (props) => {
return (
<div>
<h2>Search</h2>
<form>
<div>
search:{" "}
<input value={props.searchQuery} onChange={(event) => props.setSearchQuery(event.target.value)} />
</div>
</form>
</div>
)
}

const PersonForm = (props) => {
return (
<form onSubmit={props.submit}>
<div>
name:{" "}
<input value={props.newName} onChange={(event) => props.setNewName(event.target.value)} />
</div>
<div>
phone:{" "}
<input value={props.newPhone} onChange={(event) => props.setNewPhone(event.target.value)} />
</div>
<div>
<button type="submit">add</button>
</div>
</form>
)
}

const Phonebook = (props) => {
return (
<div>
{props.persons.map(person =>
<p key={person.name}> {person.name} {person.phone} </p>
)}
</div>
)
}

export default App;
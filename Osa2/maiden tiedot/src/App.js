import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name')
    .then(response => {
      setCountries(response.data)
    });
  }, [])

  const filteredcountries = countries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const SearchFilter = (props) => {
    return (
      <div>
        <h2>Search</h2>
        <form>
          <div>
            <input value={props.searchQuery} onChange={(event) => props.setSearchQuery(event.target.value)} />
          </div>
        </form>
      </div>
    )
  }
  
  const CountryList = (props) => {
    return (
      <div>
        {props.countries.map(country => <p key={country.name}>{country.name}</p> )}
      </div>
    )
  }

  return (
    <div>
      <h1>Country Finder</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredcountries.length > 10 ? <div>Too many matches, specify another filter</div> : <CountryList countries={filteredcountries} />}
    </div>
  )
}

export default App;

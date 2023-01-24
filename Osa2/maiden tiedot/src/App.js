import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');


  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
    .then(response => {
      setCountries(response.data)
    });
  }, [])

  const filteredcountries = countries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleClick = (country) => { 
    setSelectedCountry(country);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${"API_KEY"}`)
    .then(response => {
      setWeather(response.data);
    })
    .catch(error => {
      setError(error.response.data.message);
    });
  }

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
        {props.countries.map(country => <p key={country.name}>{country.name}<button key="button" onClick={() => handleClick(country)}>Show</button></p>)}
      </div>
    )
  }

  const CountryDetails = (props) => {
    const country = props.country;
    return (
      <div>
        <h2>{country.name}</h2>
        <img src={country.flags.svg} width="250" height="150" alt={`Flag of ${country.name}`} />
        <h3>Languages</h3>
        <ul>
          {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
        </ul>
        {error ? <div>{error}</div> : <div>
          <h3>Weather in {country.capital}</h3>
          <p>Temperature: {weather.main && weather.main.temp?weather.main.temp: "no data"} Celsius</p>
          
    </div>}
      </div>
    )
  }

  return (
    <div>
      <h1>Country Finder</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredcountries.length > 10 ? <div>Too many matches, specify another filter</div> : 
      filteredcountries.length === 1 ? <CountryDetails country={filteredcountries[0]} /> : filteredcountries.length === 0 ? <div>No country found</div> :<CountryList countries={filteredcountries} />}
      {selectedCountry.name ? <CountryDetails country={selectedCountry} /> : null}
    </div>
  )
}

export default App;

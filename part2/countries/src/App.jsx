import { useState, useEffect } from 'react'
import axios from 'axios'

// key
const VITE_API_KEY = import.meta.env.VITE_API_KEY

const Country = ({country, setWeather, setIcon, icon, weather}) => {

  // console.log('VITE_API_KEY', import.meta.env.VITE_API_KEY)
  // obtenemos el tiempo
 useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${VITE_API_KEY}&q=${country.name.common}`)
      .then((response) => {
        setWeather(response.data.current.condition.text)
        setIcon(response.data.current.condition.icon)
      })
      .catch((error) => {
        console.error('Error fetching weather:', error)
      })
  }, [country, setWeather, setIcon]) // Se ejecuta cuando cambia el país

  console.log('weather', {weather})


  console.log('country', country)
  return (
    <div>
      <h1> {country.name.common}</h1>
      <div>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
      </div>
      <h1>Languages</h1>
      <div>
      <ul>
        {Object.values(country.languages).map((language, i) => ( // usamos i porque no hay key en lenguages más que las propais lenguas
          <li key={i}>{language}</li>
        ))}
      </ul>
      <div>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
      </div>
      <div>
        <p>Weather {weather}</p></div>
        <p>
          <img src={icon} alt={`Icon of ${country.name.common}`} width="150" /> 
        </p>
    </div>
    </div>
  )
}

const CountryToShow = ({countryToShow, showCountry, setWeather, setIcon, icon, weather}) => {
  if (showCountry) {
    return (
      <Country country={countryToShow} setWeather={setWeather} setIcon={setIcon} icon={icon} weather={weather}/> 
    )
    
  }
}

const CountriesToShow = ({ countries, handleShowCountry, setWeather, setIcon, icon, weather}) => {

  console.log(countries)
  if (countries.length > 10){
    return (
      <div>
        Too many matches, specify another file
      </div>
    )
  } //Si el pais coincide
   else if (countries.length == 1) {
    return (
      <Country country={countries[0]} setWeather={setWeather} setIcon={setIcon} icon={icon} weather={weather}/>
    )
  }
  else if(countries.length <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <p key={country.cca3}>{country.name.common} <button onClick={() => handleShowCountry(country.name.common)}>show</button></p>
        ))}
      </div>
    )
  }
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showCountry, setShowCountry] = useState(false)
  const [countryToShow, setCountryToShow] = useState([])
  const [weather, setWeather] = useState('Sunny')
  const [icon, setIcon] = useState()

  // Cargar todos los países al montar el componente
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setAllCountries(response.data)
        setFilteredCountries(response.data) // Mostrar todos por defecto
      })
      .catch((error) => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  // Filtrar paises cuando actualiza la busqueda
  useEffect(() => {
    const filtered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCountries(filtered)
  }, [searchTerm, allCountries])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setCountryToShow()
    setShowCountry(false)
  }

const handleShowCountry = (name) => {
  axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    .then((response) => {
      setCountryToShow(response.data)
      setShowCountry(true)
    })
    .catch((error) => {
      console.error('Error fetching country:', error)
    })
}


  return (
    <div>
      <h1>Search Countries</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <CountriesToShow countries={filteredCountries} handleShowCountry={handleShowCountry} setWeather={setWeather} setIcon={setIcon} weather={weather}
  icon={icon}/>
      <CountryToShow countryToShow={countryToShow} showCountry={showCountry} setWeather={setWeather} setIcon={setIcon}   weather={weather}
  icon={icon}/>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import axios from 'axios';

const api_key = import.meta.env.VITE_SOME_KEY

const App = () =>{
const [country, setcountry] = useState('')
const [result, setResult] = useState(null);
const [weather, setWeather] = useState(null);

const handleChange =(event) =>{
  setcountry(event.target.value)
  }

useEffect(() => {
  if (country) {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const countryNames = response.data.map(country => country.name.common);
        const filteredNames = countryNames
          .filter(name => name.toLowerCase().includes(country.toLowerCase()));
        if (filteredNames.length > 10) {
          setResult(`Too many matches, specify another filter`);
          console.log('filteredNames:', filteredNames);
          
        } else if( filteredNames.length > 1 && filteredNames.length <= 10) {
          setResult(filteredNames);
          console.log('filteredNames:', filteredNames);         
        }
        else if (filteredNames.length == 1){
          axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filteredNames}`)
            .then(response =>{
              setResult(response.data)              
            }
            )
        }
        else if (filteredNames.length == 0){
          setResult(`no countries found.`)
        }
      });
  } else {
    setResult(null);
  }
}, [country]);

useEffect(() => {
  if (result && typeof result === 'object' && !Array.isArray(result)) {
    const capital = result.capital && result.capital[0];
    if (capital) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
        )
        .then(response => {
          setWeather(response.data);
        })
        .catch(() => setWeather(null));
    }
  } else {
    setWeather(null);
  }
}, [result]);

const fetchCountryDetails = (name) => {
  axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    .then(response => {
      setResult(response.data);
      setcountry(name)
      });
};

  return(
    <div>
    <form>
      find Countries: <input value={country} onChange={handleChange} />
    </form>
    {typeof result === 'string' && <div>{result}</div>}
    {Array.isArray(result) && (
        <ul>
          {result.map(name => (
            <li key={name}>
              {name}{' '}
              <button onClick={() => fetchCountryDetails(name)}>show</button>
            </li>
          ))}
        </ul>
      )}
    {result && typeof result === 'object' && !Array.isArray(result) && (
      <div>
        <h1>{result.name.common}</h1>
        <div>Capital: {result.capital && result.capital[0]}</div>
        <div>Area: {result.area}</div>
        <div><h2>Languages</h2></div>
        <div><ul>
          {Object.values(result.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul></div>
        <img src={result.flags.png} alt={`Flag of ${result.name.common}`} width={200} height={200}/>
        {weather && (
          <div>
          <h2>Weather in {result.capital[0]}</h2>
          <div>Temperature {weather.main.temp} Celsius</div>
          <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          />
          <div>Wind {weather.wind.speed} m/s</div>
          </div>
        )}
      </div>
    )}
  </div>   
  )
}


export default App

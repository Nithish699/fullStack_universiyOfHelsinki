import { useEffect, useState } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'


const App =() => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`).then((response) => {
      setCountries(response.data)
    })
  }, [])

  const matchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLocaleLowerCase())
  )

  return (
    <>
      <div>
        find countries{' '}
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      {value === '' ? null : (
        <CountryList countries={matchedCountries} showCountry={setValue} />
      )}
    </>
  )
}

export default App
import Weather from './Weather'

const CountryDetails = ({ nation }) => {
  const spokenLanguages = Object.values(nation.languages)


    return (
    <>
      <h1>{nation.name.common}</h1>
      <div>Capital {nation.capital}</div>
      <div>Area {nation.area}</div>

      <h2>Languages</h2>

      <ul>
        {spokenLanguages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={nation.flags.png}
        alt={`Flag of ${nation.name.common}`}
        width="200"
      />
      <Weather country={nation} />
    </>
  )
}

const CountryList = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  if (countries.length > 1) {
    return countries.map((item) => (
      <div key={item.cca3}>
        {item.name.common}{' '}
        <button onClick={() => showCountry(item.name.common)}>Show</button>
      </div>
    ))
  }

  if (countries.length === 1) {
    return <CountryDetails nation={countries[0]} />
  }
  

  return <div>No matches, please try another search</div>
}

export default CountryList
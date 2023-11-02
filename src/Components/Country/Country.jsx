import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {

  const { name, flags, cca3, area } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color : visited ?'red'  : 'white'}}>Name: {name?.common}</h3>

      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>{visited ? 'Want to Visite': 'Visited'}</button>
      {visited ? 'I have visited this Country' : 'I want to visit this country'}
      <br />
      <br />
      <button onClick={() => handleVisitedCountries(country)}>Mark As Visited</button>
    </div>
  );
};

export default Country;
import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';

import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}




/*function LoadCountries (){
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting Every  country of the world!!</h1>
      <h4>Available Countries: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name.common} population={country.population
        }></Country>)
      }
    </div>
  )
}

function Country (props){
  return (
    <div>
      <h3>name: {props.name}</h3>
      <h4>population: {props.population}</h4>
    </div>
  )
} */
export default App;

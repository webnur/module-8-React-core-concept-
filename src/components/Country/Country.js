import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {area, population, name, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>Country name: {name.common}</h1>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>

        {/*     <h1>Country name: {props.name}</h1>
            <p>Population: {props.population}</p>
            <p><small>Area: {props.area}</small></p> */}
         
        </div>
    );
};

export default Country;
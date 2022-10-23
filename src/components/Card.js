import React from 'react';

const Card = ({country}) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={'drapeaux' + country.translations.fra.common} />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Region:</strong> {country.region}</p>
            </div>
        </li>
        
    );
};

export default Card;
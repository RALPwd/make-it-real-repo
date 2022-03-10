import React from 'react';
import './index.scss' 

const PokemonCard = ({name, image, weight, attack, defense, special}) => {
  return (
    <div className='pokecard'>
      <div className='pokecard__image'>
        <div className="pokecard__image__container">
          <img src={image} alt={name}/>
        </div>
        <h3>{name}</h3>
      </div>
      <div className="pokecard__info">
        <p>Peso: {weight}</p>
        <p>AP: {attack}</p>
        <p>DP: {defense}</p>
        <p>SP: {special}</p>        
      </div>
    </div>
  )
}

export default PokemonCard
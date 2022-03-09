import './App.css';
import PokemonCard from './components/PokemonCard';
import pokemons from './assets/pokedex.json'

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon, idx) => {
        return (
          <PokemonCard 
            key={idx} 
            image={pokemon.image} 
            name={pokemon.name} 
            weight={pokemon.weight} 
            attack={pokemon.stats[1].base_stat} 
            defense={pokemon.stats[2].base_stat} 
            special={pokemon.stats[3].base_stat}
          />)
      })}
    </div>
  );
}

export default App;

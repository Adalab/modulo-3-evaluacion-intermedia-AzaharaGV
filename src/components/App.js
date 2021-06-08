import "../stylesheets/App.css";
import data from "../data/pokemons.json";
import PokemonList from "./PokemonList";

const App = () => {
  return (
    <>
      <h2>Pokémones Variados</h2>
      <PokemonList list={data} />
    </>
  );
};

export default App;

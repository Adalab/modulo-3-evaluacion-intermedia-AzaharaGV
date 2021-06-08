import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const itemPoke = props.list.map((item) => {
    return (
      <li key={item.id}>
        <Pokemon name={item.name} />
      </li>
    );
  });
  return <ul>{itemPoke}</ul>;
};
export default PokemonList;

import React from "react";
import data from "../data/pokemons.json";

const Pokemon = (props) => {
  return (
    <>
      <article>
        <h4 className="title">{props.name}</h4>
        <img src={props.url} alt={props.name} />
      </article>
    </>
  );
};
export default Pokemon;

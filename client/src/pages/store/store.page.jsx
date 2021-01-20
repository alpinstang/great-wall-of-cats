import React from "react";
import { ReduxFetch } from "react-redux-fetch";
import Spinner from "../../components/spinner/spinner.component";

const fetchConfig = [
  {
    resource: "allPokemon",
    method: "get", // You can omit this, this is the default
    request: {
      url: "https://jsonplaceholder.typicode.com/posts?limit=5",
    },
  },
];

const PokemonList = () => (
  <ReduxFetch config={fetchConfig} fetchOnMount>
    {({ allPokemonFetch }) => {
      if (allPokemonFetch.rejected) {
        return <div>Oops... Could not fetch Pokémon!</div>;
      }

      if (allPokemonFetch.fulfilled) {
        return (
          <ul>
            {allPokemonFetch.value.map((pokemon) => (
              <li key={pokemon.id}>{pokemon.title}</li>
            ))}
          </ul>
        );
      }

      return <Spinner />;
    }}
  </ReduxFetch>
);

export default PokemonList;

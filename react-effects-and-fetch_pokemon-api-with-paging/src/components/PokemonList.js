import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page,setPage ]=useState(0)
  

const handelPrev = ()=> {
  setPage(page-20)
}


const handelNext= ()=> {
  setPage(page+20)
}



  useEffect(() => {
    async function loadPokemon(page) {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        
        const data = await response.json();
        setPokemon(data.results);
        
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(page);
    
  }, [page]);

  return (
    <main>
      <button type="button" onClick={handelPrev} disabled={page===0}>Previous Page</button>
      <button type="button" onClick={handelNext}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

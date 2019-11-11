import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])

 const search = (charArr)=>{
   setCharacters(charArr)
 }

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/').then(res=>{
      console.log(res.data.results)
      setCharacters(res.data.results)

    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link className="character-button" to={'/'}>Home</Link>
      <SearchForm search={search} characters={characters} />
      {characters.map(char=>{
        return <CharacterCard key={char.id} character={char} />
      })}
    </section>
  );
}

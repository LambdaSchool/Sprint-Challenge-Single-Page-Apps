import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function SearchForm() {
 const [searchNames, pushNames]=useState([]);
 const [CurrentSearch, ChangeSearch]=useState('');

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
     const characters= res.data.results;
      const characterresults=characters.filter(character => { 
        return character.name.toLowerCase().includes(CurrentSearch.toLowerCase());
      })

       pushNames(characterresults);
     })
   .catch(error=> {
      console.log(error);
    })

    }, [CurrentSearch]);

   const onSearchChange= e => {
     ChangeSearch(e.target.value);
     console.log(ChangeSearch);
   }

   let searchResult = "";
   var submit = event => {
     return (searchResult = event.target.value)
   }
  return (
    <section>
     <form onSubmit={event => submit(event)}>
       <input className="search-form" 
       id="name"
       type="text"
       placeholder="Search"
       value={CurrentSearch}
       onChange={event => onSearchChange(event)} />
     </form>
     {
       searchNames.map((character, index) => {
         return(
           <CharacterCard key={index} char={character} />
         )
       })
     }
    </section>
  );
}

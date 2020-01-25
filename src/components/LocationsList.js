import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from './SearchForm';
import styled from "styled-components";


const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const Button = styled.button`

width: 15%;
font-size: 1.3rem;
color: black;
background: orange;
border-radius: 8px;
border: 2px solid black;
margin: 5px;
&:hover{
  color: orange;
  background: #2c3cfb;
}
`;

const Container = styled.div`
    background: black;
  height: 100vh;
  background-position: right;
  border-radius: 10px;
  
    .grid {
        width: 100%;
        display: flex;
        Justify-content: center;
        flex-wrap: wrap;
        /* height:100vh; */

    }

`;

export default function LocationsList() {
    const [location , setLocation] = useState([])
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    
    useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
        .then(response => {
            console.log("Location" , response)
          const name = response.data.results.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())
            );
          setLocation(name)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    
  }, [query , page]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      
      <SearchForm 
        handleInputChange={handleInputChange}
        query={query}
        />
       <BtnContainer>
          <Button onClick={() => 
          (page > 2) ? setPage(page - 1): setPage(1)}
          >Previous</Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </BtnContainer>
      <Container>
      <div className="grid">
      {location.map((item, id) => {
            return (
                <LocationCard
                  key={id} 
                  name={item.name} 
                  type={item.type}
                  dimension={item.dimension} 
                  
                />
            );
          })}
      </div>  


      </Container>
      

    </section>
  );

}

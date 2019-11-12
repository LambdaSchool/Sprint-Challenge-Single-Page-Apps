import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";


//Axios Import
import Axios from "axios";

//Components
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
// import SearchForm from './components/SearchForm'


export default function App() {
  const [rmData, setrmData] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character")
      .then(res => console.log(res.data.results))
      .then(res => setrmData(res.data.results))
      .catch(res => console.log(res));
  }, []);
  
  return (
    <main>
      <Route path='/' render={props => <Header {...props} rmData={rmData} />} />
      <Route exact path='/' render={props => <WelcomePage {...props} rmData={rmData} />} />
      <Route exact path='/characterlist' render={props => <CharacterCard {...props} rmData={rmData} />} />
      <Route path='/characterlist/:id' render={props => <CharacterList {...props} rmData={rmData} />} />
    </main>
  );
}

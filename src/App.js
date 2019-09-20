import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
// import LocationsList from './components/LocationsList';
// import EpisodeList from './components/EpisodeList';
// import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <Nav />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/character' component={CharacterList} />
      {/* <Route path='/location' component={LocationsList} />
      <Route path='/episode' component={EpisodeList} /> */}
       {/* <Route path='/search' component={SearchForm} /> */}

    </main>
  );
}
















// import React from "react";
// import Header from "./components/Header.js";
// import CharacterCard from './components/CharacterCard'



//  const App= ()=> {


// 	return (
// 		<main>
// 			<Header />
//       <CharacterCard/>
// 		</main>
// 	);
// }
// export default App

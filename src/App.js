import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
    </main>
  );
}

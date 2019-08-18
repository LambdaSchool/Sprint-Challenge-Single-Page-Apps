import React from "react";
//import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import TabNav from './components/TabNav';
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />

      
    </main>
  );
}

export default App;
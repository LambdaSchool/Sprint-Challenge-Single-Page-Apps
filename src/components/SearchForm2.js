import React, {useState, useEffect} from "react";

const people = [
    'Ariel',
    'Lauren',
    'Ellie',
    'Ramona'
];

function SearchForm2() {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchForm2
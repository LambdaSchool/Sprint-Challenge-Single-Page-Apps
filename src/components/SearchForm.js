import React, { useState, useEffect }  from "react";
import { Search, Grid } from 'semantic-ui-react';

const testData = [
  'Ariel',
  'Ellie',
  'Ramona',
  'Mike',
  'Brittney'
]



export default function SearchForm(props) {
  const [userSearch, setUserSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  
  const handleChange = event => {
    setUserSearch(event.target.value)
  }

  useEffect(() => {
    const search = testData.filter((searchTerm) => {
      searchTerm.toLowerCase().includes(userSearch)
    })
    setSearchResult(search)
  }, [userSearch])

  return (

    <Grid>
      <Grid.Column>
        <Search
        style={{marginLeft: '50%', marginTop: '1%'}}
        placeholder="Search..."
        size='large'
        value={userSearch}
        onChange={handleChange}
         />
         <ul>
           {searchResult.map((item) => {
             return(
               <li>{item}</li>
             )
           })}
         </ul>
      </Grid.Column>
    </Grid>
  );
}
//Onchange


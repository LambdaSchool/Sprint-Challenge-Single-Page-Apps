import React from "react";
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import SearchForm from './SearchForm'
import SearchForm2 from './SearchForm2'


export default function Header(props) {

  return (
    <div>
    <nav className="site_nav">
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    {/* <SearchForm /> */}
    <SearchForm2 />
    </nav>
    <Link to='/'>
      <Button>Home</Button>
    </Link>
    <Link to='./characterlist'>
      <Button style={{marginTop: '1%', marginBottom: '1%'}}>Character List</Button>
    </Link>

    </div>

  );
}

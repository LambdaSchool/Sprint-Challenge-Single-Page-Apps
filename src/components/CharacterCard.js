import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard() {
  return <span> todo: character


<Card>
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
    <Card.Content>
      <Card.Header>NAME</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        description.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>


  </span>;

  
}

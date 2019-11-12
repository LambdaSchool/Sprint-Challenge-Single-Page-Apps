import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function CharacterCard(props) {

  return (
    <Card.Group itemsPerRow={3}>
      {
        props.rmData.map((item) => {
        return (
          <Card key={item.id}>
            <Image src={item.image} wrapped ui={false} />
            <Card.Content>
        <Card.Header>{item.name}</Card.Header>
              <Card.Meta>Species:{item.species}</Card.Meta>
              <Card.Description>
                {`Hi I'm from ${item.origin.name}`}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/characterlist/${item.id}`}>
                <Icon name="user" />
                {`I've been in ${item.episode.length} episodes`}
              </Link>
            </Card.Content>
          </Card>
        );
      })
    }
    </Card.Group>
  );
}

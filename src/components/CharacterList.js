import React from "react";
import { Container, Card, Image} from "semantic-ui-react";

export default function CharacterCard(props) {
  const id = props.match.params.id;
  const character = props.rmData.find(char => `${char.id}` === id) || {};

  return (
    <Container>
      <Card
        style={{
          marginTop: "5%",
          marginLeft: "35%"
        }}
      >
        <Image src={character.image} size="large" />
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Meta>Species:{character.species}</Card.Meta>
        </Card.Content>
      </Card>
    </Container>
  );
}

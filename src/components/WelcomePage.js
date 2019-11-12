import React from "react";
import { Card} from "semantic-ui-react";

export default function WelcomePage(props) {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
      </header>
      <Card.Group itemsPerRow={5} >
        {props.rmData.map(image => {
          return <Card key={image.id} raised image={image.image} />;
        })}
      </Card.Group>
    </section>
  );
}

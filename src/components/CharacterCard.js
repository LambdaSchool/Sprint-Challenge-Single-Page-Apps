import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
    const Card = styled.div`
      width: 80%;
      padding: 10px;
      box-shadow: 1px 1px 5px black;
      border-radius: 10px;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
    `;
  
    const CardImg = styled.img`
      width: 200px;
      height: 200px
    `;
  
    const CardInfo = styled.div`
      tex-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50%;
    `;
  
    const Status = styled.div`
      tex-align: left;
      background: green;
      height: 30px;
      vertical-align: middle;
      color: white;
      padding: 10px;
      border-radius: 5px;
    `;

  
  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <div>ID: {props.character.id}</div>
          <div>Name: {props.character.name}</div>
          <div>Gender: {props.character.gender}</div>
          <div>Species: {props.character.species}</div>
          <div>Origin: {props.character.origin.name}</div>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </div>
  )
  
}

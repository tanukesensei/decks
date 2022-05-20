import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const DeckForm = (props) => {
  const [deck, setDeck] = useState({
    playerName: props.deck ? props.deck.playerName : "",
    deckName: props.deck ? props.deck.deckName : "",
    deckImage: props.deck ? props.deck.deckImage : "",
    date: props.deck ? props.deck.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { playerName, deckName, deckImage } = deck;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [playerName, deckName, deckImage];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const deck = {
        id: uuidv4(),
        playerName,
        deckName,
        deckImage,
        date: new Date(),
      };
      props.handleOnSubmit(deck);
    } else {
      errorMsg = "Por favor, preencha todos os campos.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Deck Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="playerName"
            value={playerName}
            placeholder="Nome do Player"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="deckName">
          <Form.Control
            className="input-control"
            type="text"
            name="deckName"
            value={deckName}
            placeholder="Nome do Deck"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="deckImage">
          <Form.Control
            className="input-control"
            type="text"
            name="deckImage"
            value={deckImage}
            placeholder="Imagem do Deck"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Confirmar
        </Button>
      </Form>
    </div>
  );
};

export default DeckForm;

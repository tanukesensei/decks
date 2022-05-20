import React from "react";
import DeckForm from "./DeckForm";


const AddDeck = () => {
    const handleOnSubmit = (deck) => {
        console.log(deck);
    };

    return (
        <React.Fragment>
            <DeckForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddDeck;
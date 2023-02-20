import React from "react";
import "./cards.css";
import data from "../../mockData/index.json"
import Card from "../card/card.js"

function createCard(card) {
    return (
        <Card
            date={card.date}
            readingTime={card.readingTime}
            title={card.title}
            description={card.description}  
            claps={card.claps}
            liked={card.liked}
            image={card.image}
        />
    );
}

function Cards() {
 return (
    <div class="card-section">
    { data.map(createCard)}
    </div>
)
}

export default Cards;
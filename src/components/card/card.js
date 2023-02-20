import React from "react";
import "./card.css";

function Card(props) {

    let liked = props.liked ? "heart-red.svg" : "heart-black.svg";
    let clap= "clapping.svg";
    return (
        <div className="card">
        <div>
            <img className="card-image" src={require(`../../Images/${props.image}`)} alt=""/>
        </div>
        <div className="card-content">
            <div className="card-content-top">
                <p>{props.date}</p>
                <p>{props.readingTime}</p>
            </div>
            <div className="card-content-heading">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="icons">
            <div className="icon">
                <img className="icon-image" src={require("../../Icons/"+clap)} alt="like"/>
                <p>{props.claps}</p>
            </div>
            <div className="icon">
                <img className="icon-image" src={require("../../Icons/"+ liked)} alt=""/>
            </div>
        </div>
    </div>
    );
}

export default Card;

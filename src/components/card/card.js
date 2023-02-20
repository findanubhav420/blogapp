import React , {useState} from "react";
import "./card.css";

function Card(props) {

    // let liked = props.liked ? "heart-red.svg" : "heart-black.svg";
    const[liked, setLiked] = useState(props.liked ? "heart-red.svg" : "heart-black.svg");
    const[clapCount, setclaps] = useState(props.claps);

    let clap= "clapping.svg";



    function handleClick() {
        if(liked === "heart-red.svg") {
            setLiked("heart-black.svg");
        } else {
            setLiked("heart-red.svg");
        }
    }

    function handleClap(){
        if(clapCount === props.claps){
            setclaps(clapCount+1);
        }
        else{
            setclaps(clapCount-1);
        }
        
    }
    return (
        <div className="card">
        <div>
            <img className="card-image" src={require(`../../assets/Images/${props.image}`)} alt=""/>
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
                <button onClick={handleClap}><img className="icon-image" src={require("../../assets/Icons/"+clap)} alt="like"/></button>
                <p>{clapCount}</p>
            </div>
            <div className="icon">
                <button onClick= {handleClick}>
                    <img className="icon-image" src={require("../../assets/Icons/"+ liked)} alt=""/>
                </button>
            </div>
        </div>
    </div>
    );
}

export default Card;

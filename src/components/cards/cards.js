import React from "react";
import "./cards.css";
// import data from "../../assets/mockData/index.json"
import Card from "../card/card.js"
import redLikeIcon from '../../assets/Icons/heart-red.svg';
import blackLikeIcon from "../../assets/Icons/heart-black.svg";
import blackClapIcon from '../../assets/Icons/clapping.svg';
import { useEffect, useState } from "react";
import  makeRequest  from "../../utils/makeRequest/index.js";
import  {GET_BLOG_DATA } from "../../constants/apiEndPoints.js";
import { v4 as uuidv4 } from 'uuid';



function createCard(card) {
    return (
        <Card 
            key={uuidv4()} 
            id = {card.id}
            date={card.date}
            readingTime={card.readingTime}
            title={card.title}
            description={card.description}  
            claps={card.claps}
            liked={card.liked}
            image={card.image}
            redLikeIcon={redLikeIcon}
            blackLikeIcon={blackLikeIcon}
            blackClapIcon={blackClapIcon}
        />
    );
}

function Cards() {

    const [blogData, setBlogData] = useState();
    const [error, setError] = useState();
  
    useEffect(() => {
      makeRequest(GET_BLOG_DATA)
        .then((response) => {
           setBlogData(response);
        })
        .catch((e) => {
          setError(e.message);
        });
    }, []);
  
    if (error) {
      return (
        <div className="blogDataError" >
          <p data-testid="Error">{error}</p>
        </div>
      );
    }

 return blogData?
    (<div className="card-section" data-testid="card">
    {blogData.map(createCard)}
    </div>) :
    (<div className="blogDataLoader">
    <p>Loading...</p>
    </div>)

}



export default Cards;
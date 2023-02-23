import React , {useState} from "react";
import "./card.css";
import makeRequest from "../../utils/makeRequest/index.js";
import { UPDATE_BLOG_DATA } from "../../constants/apiEndPoints.js";

function Card(props) {

    // let liked = props.liked ? "heart-red.svg" : "heart-black.svg";
    const[like, setLike] = useState(props.liked ? props.redLikeIcon : props.blackLikeIcon);
    const[clapCount, setClapCount] = useState(props.claps);

    const handleLike = async () => {
        try {
          await makeRequest(UPDATE_BLOG_DATA(props.id), {
            data: { liked: !props.liked },
          });
          if(like === props.blackLikeIcon)
          setLike(props.redLikeIcon);
          else
          setLike(props.blackLikeIcon);
        } catch (e) {
          //TODO: Handle error
        }
      };

    const handleClap = async () => {
        try {
          await makeRequest(UPDATE_BLOG_DATA(props.id), {
            data: { claps: clapCount + 1 },
          });
          setClapCount(clapCount + 1);
        } catch (e) {
          //TODO: Handle error
        }
      };
    return (
        <div className="card" data-testid="cardPost">
        <div>
            <img className="card-image" src={props.image} alt="pic"/>
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
                <button onClick={handleClap}>
                    <img className="icon-image" data-testid="clap" src={props.blackClapIcon} alt="like"/>
                </button>
                <p data-testid="clap-count">{clapCount}</p>
            </div>
            <div className="icon">
                <button onClick= {handleLike}>
                    <img className="icon-image" data-testid="heart" src={like} alt=""/>
                </button>
            </div>
        </div>
    </div>
    );
}

export default Card;

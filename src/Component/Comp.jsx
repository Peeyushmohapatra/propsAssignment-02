import React from "react";
import "./comp.css";

const Comp = (props) => {
  return (
    <>
      <div style={{ boxShadow: props.shadow }} className="one">
        <div className="left">
          <div className="moviesDetails">
            <div className="poster">
              <img src={props.movieImage} alt="movie" />
            </div>
            <div className="movieName">
              <h3>{props.movieName}</h3>
              <p>{props.releaseDate}</p>
              <div className="duration">
                <div className="time">{props.duration}</div>
                {props.type}
              </div>
            </div>
          </div>
          <div className="discriptions">{props.description}</div>
          <div className="share">
            <div className="options">
              <i class="fa-sharp fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-message"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={props.rightImg} alt="movie" />
        </div>
      </div>
    </>
  );
};

export default Comp;

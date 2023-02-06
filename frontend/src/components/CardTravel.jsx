import React, { useState, useEffect } from "react";
import instance from "../utils/instance";

import "./CardTravelStyle.scss";

function CardTravel({ id }) {
  const [cards, setCards] = useState([]);

  const handleDeleteClick = () => {
    instance.delete(`/card/${id}`).catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    instance
      .get(`/card/${id}`)
      .then((result) => {
        setCards(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-management">
        <button
          className="supp-button"
          type="button"
          onClick={handleDeleteClick}
        >
          {" "}
        </button>
        {/* <button className="modif-button" type="button">
          {" "}
        </button> */}
      </div>
      <div className="card-personalize">
        <div className="picture-size">
          <img className="card-header" src={cards.picture} alt="card today" />
        </div>
        <div className="card-body">
          <p className="card-date">{cards.date}</p>
          <p className="card-description">{cards.description}</p>
          <a href={cards.link} target="_blank" rel="noreferrer">
            Voir le lieu
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTravel;

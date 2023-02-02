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
        <button type="button" onClick={handleDeleteClick}>
          Supprimer
        </button>
        <button type="button">Modifier</button>
      </div>
      <div className="card-personalize">
        <div className="picture-size">
          <img className="card-header" src={cards.picture} alt="card today" />
        </div>
        <div className="card-body">
          <p className="card-date">{cards.date}</p>
          <p className="card-description">{cards.description}</p>
          <p className="card-link">{cards.link}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTravel;

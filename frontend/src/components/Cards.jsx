import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../utils/instance";
import CardTravel from "./CardTravel";

import "./CardsStyle.scss";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    instance
      .get("/card")
      .then((result) => {
        setCards(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      <div className="addNew">
        <Link to="/add_card">+</Link>
      </div>
      <div className="travel-cards">
        <div className="cards">
          {cards
            .map((card) => <CardTravel key={card.id} id={card.id} />)
            .reverse()}
        </div>
      </div>
    </section>
  );
}

export default Cards;

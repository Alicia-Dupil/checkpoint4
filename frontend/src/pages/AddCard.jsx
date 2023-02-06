import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/instance";

import "./AddCardStyle.scss";

export default function AddCard() {
  const [cards, setCards] = useState({
    picture: "",
    date: "",
    descrption: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCards({ ...cards, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/card", cards)
      .then(() => navigate("/"))
      .catch((err) => console.error(err, "Error"));
  };

  return (
    <section className="addCard">
      <h2>Ajouter une card</h2>
      <div className="return">
        <Link to="/">Revenir au journal</Link>
      </div>
      <div className="box-form">
        <form
          onSubmit={handleSubmit}
          name="addCard-form"
          className="addCard-form"
        >
          <label htmlFor="picture">Photo</label>
          <input
            onChange={handleChange}
            type="picture"
            name="picture"
            id="picture"
          />
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" onChange={handleChange} />
          <label htmlFor="description">Description</label>
          <input
            type="description"
            name="description"
            id="description"
            onChange={handleChange}
          />
          <label htmlFor="link">Lien</label>
          <input type="link" name="link" id="link" onChange={handleChange} />

          <button className="add-card" type="submit">
            Add card
          </button>
        </form>
      </div>
    </section>
  );
}

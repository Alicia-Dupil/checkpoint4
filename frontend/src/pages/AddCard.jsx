// import { useRef, useState, useEffect } from "react";
// import instance from "../utils/instance";

export default function AddCard() {
  // const [cards, setCards] = useState([]);

  // const inputRef = useRef();
  // const [filesToUpload, setFilesToUpload] = useState(cards.picture);

  // const handleFilesChange = (file) => {
  //   setFilesToUpload(file.target.value.split("\\")[2]);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCards({ ...cards, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("picture", inputRef.current.files[0]);
  //   instance
  //     .post(`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures`, formData)
  //     .then(() => {
  //       console.warn("Image upload");
  //     })
  //     .catch(() => console.error("Erreur"));
  // };

  // useEffect(() => {
  //   setFilesToUpload(cards.picture);
  // }, []);

  return (
    <>
      <p>Amazing card</p>
      {/* <section className="edit">
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="input_image">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${
                updateCard.picture !== "" ? updateCard.picture : "polaroid.png"
              }`}
              alt="Today Travel"
            />
            <input
              type="file"
              style={{ display: "none" }}
              name="picture"
              ref={inputRef}
              onChange={handleFilesChange}
            />
            <button
              type="submit"
              className="custom_button"
              onClick={() => inputRef.current.click()}
            >
              Choisir une photo
            </button>
            <p>{filesToUpload}</p>
          </div>
          <div>
            Date
            <input type="date" name="date" value={cards.date} />
          </div>
          <div>
            Description
            <input type="text" name="description" value={cards.description} />
          </div>
          <div>
            Link
            <input type="text" name="link" value={cards.link} />
          </div>
        </form>
        <form onChange={handleChange}>New Card</form>
      </section>
      <button type="button" className="add-button" onClick={handleSubmit}>
        +
      </button> */}
    </>
  );
}

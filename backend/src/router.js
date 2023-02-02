const express = require("express");
const fs = require("fs");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// Destination de stockage des photos
const uploadPictures = multer({ dest: "public/uploads/pictures/" });

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const cardControllers = require("./controllers/cardControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// routes card
router.get("/card", cardControllers.browse);
router.get("/card/:id", cardControllers.read);
router.post("/card", cardControllers.add);
router.put("/card/:id", cardControllers.edit);
router.delete("/card/:id", cardControllers.destroy);

// route POST pour recevoir un fichier
router.post(
  "/uploads/pictures",
  uploadPictures.single("picture"),
  (req, res) => {
    // On récupère le nom du fichier
    const { originalname } = req.file;

    // On récupère le nom du fichier
    const { filename } = req.file;

    // On utilise la fonction rename de fs pour renommer le fichier
    fs.rename(
      `uploads/${filename}`,
      `uploads/${uuidv4()}-${originalname}`,
      (err) => {
        if (err) throw err;
        res.send("File uploaded");
      }
    );
  }
);

module.exports = router;

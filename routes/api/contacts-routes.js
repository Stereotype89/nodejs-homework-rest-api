const express = require("express");
const controllers = require("../../controllers/contacts-controllers.js");
const isEmptyBody = require("../../middlewares/isEmprtyBody.js");
const isValidBody = require("../../middlewares/isValidBody.js");
const isValidId = require("../../middlewares/isValidId.js");
const isValidFavorite = require("../../middlewares/isValidFavourite.js");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getById);

router.post("/", isEmptyBody, isValidBody, controllers.addContact);

router.delete("/:id", isValidId, controllers.deleteContact);

router.put(
  "/:id",
  isValidBody,
  isEmptyBody,
  isValidId,
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  isValidBody,
  isValidFavorite,
  isValidId,
  controllers.updateContact
);

module.exports = router;

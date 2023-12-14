const express = require("express");
const controllers = require("../../controllers/contacts-controllers.js");
const isEmptyBody = require("../../middlewares/isEmprtyBody.js");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", isEmptyBody, controllers.addContact);

router.delete("/:id", controllers.deleteContact);

router.put("/:id", isEmptyBody, controllers.updateContact);

module.exports = router;

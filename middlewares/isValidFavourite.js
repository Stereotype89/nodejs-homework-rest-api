const HttpError = require("../helpers/HttpError.js");
const { contactFavoriteSchema } = require("../models/contacts.js");

const isValidFavorite = (req, res, next) => {
  const { error } = contactFavoriteSchema.validate(req.body);
  if (error) {
    next(HttpError(400, error));
  }

  next();
};

module.exports = isValidFavorite;

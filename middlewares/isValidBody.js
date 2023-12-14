const HttpError = require("../helpers/HttpError.js");
const { contactAddSchema } = require("../models/contacts.js");

const isValidBody = (req, res, next) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    next(HttpError(400, error));
  }

  next();
};

module.exports = isValidBody;

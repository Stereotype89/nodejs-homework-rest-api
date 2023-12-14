const HttpError = "../helpers/HttpError.js";

const isEmptyBody = async (req, res, next) => {
  const keys = Object.keys(req.body);
  if (!keys.length) {
    return next(HttpError(404, "missing fields"));
  }

  next();
};

module.exports = isEmptyBody;

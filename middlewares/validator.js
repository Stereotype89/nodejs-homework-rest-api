const validator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ Message: `Missing required ${error} field` });
      return;
    }
    next(error);
  };
};
module.exports = validator;

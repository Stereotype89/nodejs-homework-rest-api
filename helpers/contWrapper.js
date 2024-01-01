const contWrapper = (controler) => {
  const func = async (req, res, next) => {
    try {
      await controler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = contWrapper;

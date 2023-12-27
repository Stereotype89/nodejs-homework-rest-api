import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

contactAddSchema.post("save", (error, data, next) => {
  console.log(error);
  next();
});

export default contactAddSchema;

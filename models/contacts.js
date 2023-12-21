const { Schema, model } = require("mongoose");
const Joi = require("joi");
const hooks = require("../hooks/hooks.js");

const contactAddSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const contactFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", hooks.handleSaveError);
contactSchema.post("findOneAndUpdate", hooks.handleSaveError);
contactSchema.pre("findOneAndUpdate", hooks.preUpdate);

const Contact = model("contact", contactSchema);
console.log("Contact =>", Contact);

module.exports = { Contact, contactAddSchema, contactFavoriteSchema };

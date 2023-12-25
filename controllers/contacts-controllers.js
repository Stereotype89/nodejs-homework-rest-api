const { Contact } = require("../schemas/contacts");

const listContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json(contacts);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId).exec();
  if (!contact) {
    res.status(404).json({
      message: `Contact with id ${contactId} not found`,
    });
    return;
  }
  res.json(contact);
};

const add = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    result,
  });
};

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ contactId }, req.body);
  if (!result) {
    res.status(404).json({
      message: `Contact with id ${contactId} not found`,
    });
    return;
  }
  res.json({
    message: "Successfuly updated",
    result,
  });
};

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.deleteOne({ contactId });
  if (!contact) {
    res.status(404).json({
      message: `Contact with id ${contactId} not found`,
    });
    return;
  }
  res.status(200).json({
    message: "Contact deleted",
  });
};

const updateStatusContactById = async (req, res) => {
  if (req.body.favorite === undefined) {
    res.status(400).json({
      message: "Missing field favorite",
    });
    return;
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ contactId }, req.body);
  if (!result) {
    res.status(404).json({
      message: `Contact with id ${contactId} not found`,
    });
    return;
  }
  res.json({
    status: "Successfuly updated",
  });
};

module.exports = {
  listContacts,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContactById,
};

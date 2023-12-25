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
      Message: "Not found",
    });
    return;
  }
  res.json(contact);
};

const add = async (req, res, next) => {
  const result = await Contact.create(req.body);
  if (!result) {
    res.status(400).json({
      Message: "Missing required name field",
    });
    return;
  }
  res.status(201).json({
    Message: "Contact created",
  });
};

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    res.status(404).json({
      Message: `${contactId} not found`,
    });
    return;
  }
  res.json({
    Message: "Successfuly updated",
    result,
  });
};

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    res.status(404).json({
      Message: "Not found",
    });
    return;
  }
  res.status(200).json({
    Message: "Contact deleted",
  });
};

const updateStatusContactById = async (req, res) => {
  if (req.body.favorite === undefined) {
    res.status(400).json({
      Message: "Missing field favorite",
    });
    return;
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ contactId }, req.body);
  if (!result) {
    res.status(404).json({
      Message: "Not found",
    });
    return;
  }
  res.json({
    Message: "Successfuly updated",
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

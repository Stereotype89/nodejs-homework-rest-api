const fs = require("fs/promises");
const path = require("path");
const contactPath = path.resolve("models", "contacts.json");
const { nanoid } = "nanoid";

const stringyfyContacts = (contacts) =>
  fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contacts = await fs.readFile(contactPath);

  return JSON.parse(contacts);
};

const getContactById = async (id) => {
  console.log("id: ", id);
  const contacts = await listContacts();
  const contactId = await contacts.find((item) => item.id === id);
  return contactId;
};

const addContact = async (data) => {
  const newContact = {
    id: nanoid(),
    ...data,
  };

  const contacts = await listContacts();
  contacts.push(newContact);

  await stringyfyContacts(contacts);
  return newContact;
};

const removeContact = async (id) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [contact] = contacts.splice(index, 1);

  await stringyfyContacts(contacts);

  return contact;
};

const updateContact = async (id, body) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === id);

  if (index === -1) {
    return;
  }

  contacts[index] = { ...contacts[index], ...body };

  await stringyfyContacts(contacts);

  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

const { Contact } = require("../models/contact");

async function listContacts() {
  const data = await Contact.find();
  return data;
}

async function getContactById(contactId) {
  const result = await Contact.findById(contactId);
  return result || null;
}

async function removeContact(contactId) {
  const result = await Contact.deleteOne({ _id: contactId });
  return result;
}

async function addContact({ name, email, phone, favorite }) {
  const newContact = {
    name,
    email,
    phone,
    favorite,
  };
  await Contact.create(newContact);
  return newContact;
}

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
};

const updateStatusContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};

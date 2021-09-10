const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.resolve(__dirname, "db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath).then((res) => {
    const contacts = JSON.parse(res);
    console.log(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath).then((res) => {
    const contacts = JSON.parse(res);
    const targetContact = contacts.find((contact) => contact.id === contactId);
    console.log(targetContact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath).then((res) => {
    const contacts = JSON.parse(res);
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(newContacts));
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath).then((res) => {
    const contacts = JSON.parse(res);
    contacts.push({ name, email, phone, id: contacts.length + 1 });
    fs.writeFile(contactsPath, JSON.stringify(contacts));
  });
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

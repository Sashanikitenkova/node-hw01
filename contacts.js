const path = require('path');
const fs = require('fs').promises;
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, './db/contacts.json');

 async function listContacts() {
          const data = await fs.readFile(contactsPath, 'utf8');
          const contacts = JSON.parse(data);
          return contacts;
  }
  
  async function getContactById (contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    if(!result) {
      return null;
    }
    return result; 
  }
  
  async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const [removeContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts)); 
    return removeContact;
  }
  
  async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const id = nanoid();
    const newContact = { id, name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));  
    return newContact;
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };

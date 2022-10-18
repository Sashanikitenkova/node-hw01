const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

  const listContacts = () => {
    // прочитать и записать все контакты (вывести все контакты на экран)
    (async () => {
        try {
            const data = await fs.readFile('./db/contacts.json', 'utf8')
            console.log(data); 
        } catch (err) {
            console.error(err);
        }
    }) ();
  }
  
  const getContactById = contactId => {
    //получение контакта по id прочитать все и вывести один 
    console.log(`Info: ${contactId}`);
    
  }
  
  const removeContact = contactId => {
    // удаление контакта по id прочитать все, отфильтровать нужныхны и удалить (вывести на екран без него)
    console.log(`Info: ${contactId}`);
    
  }
  
  const addContact = (name, email, phone) => {
    // запись контакта и вывести все контакты 
    console.log(`Info: ${name} ${email} ${phone}`);
    
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

listContacts();
getContactById('5');
removeContact('7');
addContact('Anna Anna', 'email.@gmail.com', '(888) 212-212');
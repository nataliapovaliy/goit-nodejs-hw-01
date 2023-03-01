const fs = require('fs').promises;
const path = require('path'); 

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        console.table(result);        
    } catch (error) {
        console.log(error);
    }
}
listContacts();

function getContactById(contactId) {
    // try {
        // const data = await fs.
    // }
}

function removeContact(contactId) {

}

function addContact(name, email, phone) {
    // try {
    //     const data = await fs.readFile(contactsPath);

    // }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
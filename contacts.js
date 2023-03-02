const fs = require('fs').promises;
const path = require('path'); 
const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        console.table(result);        
    } catch (error) {
        console.log(error);
    }
}

async function getContactById(id) {
    try {
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        for (const key in result) {
            if (result[key].id === id.toString()) {
                console.table(result[key]);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        for (const key in result) {
            if (result[key].id === contactId.toString()) {
                delete result[key];
            }
        }   
        const newResult = JSON.stringify(result);
        fs.writeFile(contactsPath, newResult);
        console.table(result); 
    } catch (error) {
        console.log(error);
    }
}

async function addContact(name, email, phone) {
    try {
        const date = new Date();
        const contactId = date.getTime();
        const contactForAdd = {
            "id": contactId.toString(),
            "name": name,
            "email": email,
            "phone": phone,
        }
        const data = await fs.readFile(contactsPath);
        const result = JSON.parse(data);
        
        result.push(contactForAdd);

        const newResult = JSON.stringify(result);
        fs.writeFile(contactsPath, newResult);

        console.table(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}
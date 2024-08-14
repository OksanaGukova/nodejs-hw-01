import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
     try {
       const data = await fs.readFile(PATH_DB, 'utf8');
       const contacts = JSON.parse(data);
       const newContact = createFakeContact();
         contacts.push(newContact);
       await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
       console.log(`One contact has been added to ${PATH_DB}`);
     } catch (error) {
       console.error('Error generating contacts:', error);
     }
};

addOneContact();

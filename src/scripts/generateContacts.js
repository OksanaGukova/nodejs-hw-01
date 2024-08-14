import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    for (let index = 0; index < number; index++) {
      const contact = createFakeContact();
      contacts.push(contact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(
      `${number} contacts have been generated and saved to ${PATH_DB}`,
    );
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(3);

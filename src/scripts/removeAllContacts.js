import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
    console.log('All contacts have been removed successfully!');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();

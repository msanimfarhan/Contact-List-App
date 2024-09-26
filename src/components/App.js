
import React, { useState, useEffect } from 'react'; 
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './Contactlist';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  
  // Retrieve contacts from localStorage or use an empty array as fallback
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return savedContacts || [];
  });

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contacts}]);
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // Save contacts to localStorage whenever the contacts state changes
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;



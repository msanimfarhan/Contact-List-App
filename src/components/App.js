import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './Contactlist';

function App() {
  const contacts = [
        {
          id:"1",
          name:"Sanim",
          email:"sanim@gmail.com"
        },
        {
          id:"2",
          name:"Ifty",
          email:"ifty@gmail.com"
        },
        {
          id:"3",
          name:"Mansif",
          email:"mansif@gmail.com"
        },


  ];
  return (
    <div>
      <div className="ui container"></div>
      <Header></Header>
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

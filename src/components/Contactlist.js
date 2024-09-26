
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  // Define deleteContactHandler
  const deleteContactHandler = (id) => {
    props.getContactId(id);  // Assuming this function is passed from the parent component
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={() => deleteContactHandler(contact.id)} // Passing the handler
        key={contact.id}
      />
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;

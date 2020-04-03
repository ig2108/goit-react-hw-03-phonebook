import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;

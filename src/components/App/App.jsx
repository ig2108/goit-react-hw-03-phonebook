import React, { Component } from 'react';
import shortid from 'shortid';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import styles from './App.module.css';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    if (persistedContacts) {
      const contacts = JSON.parse(persistedContacts);
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = contact => {
    const { contacts } = this.state;
    contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.addContactToState(contact);
  };

  addContactToState = contact => {
    const { number, name } = contact;
    const isNumber = Number(number);
    if (isNumber && name !== '') {
      const contactToAdd = {
        ...contact,
        id: shortid.generate(),
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactToAdd],
      }));
    } else if (!isNumber && name === '') {
      alert('Please, enter name and number');
    } else if (!isNumber) {
      alert('Please, enter a correct number');
    } else if (name === '') {
      alert('Please, enter a name');
    }
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <div className={styles.container}>
        <SectionTitle title="Phonebook">
          <ContactForm onAddContact={this.handleAddContact} />
        </SectionTitle>
        <SectionTitle title="Contacts">
          {contacts.length > 1 && (
            <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          )}
          <ContactsList
            onDeleteContact={this.handleDeleteContact}
            contacts={filteredContacts}
          />
        </SectionTitle>
      </div>
    );
  }
}

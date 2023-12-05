import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { AppWrap } from './GlobalStyled';
import { Filter } from './Filter';
import { ContactsList } from './ContactList/ContactList';

const storageKey = 'storage-key';

export class App extends Component {
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
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.contacts))
    }
  }

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameAdded) {
      alert(`${newContact.name} is already in your contacts!`);
    } else {
      const contact = {
        ...newContact,
        id: nanoid(),
      };
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      const addedContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());

      return addedContact;
    });

    return (
      <AppWrap>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdate={this.updateFilter} />
        {<ContactsList items={visibleContacts} onDelete={this.deleteContact} />}
      </AppWrap>
    );
  }
}

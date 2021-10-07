import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

import "./App.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const users = localStorage.getItem("contacts");
    if (users) {
      const parseUsers = JSON.parse(users);
      this.setState({ contacts: parseUsers });
    }
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    if (
      this.state.contacts.find(
        (con) => con.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is alresdy in contacts`);
      return;
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }));
  };

  onFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  onContactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div className="block">
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.onFilter} />
        <ContactList
          contacts={this.onContactsFilter()}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

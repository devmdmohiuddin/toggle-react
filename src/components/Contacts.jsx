import React, { Component } from "react";

import Contact from "../components/Contact";

class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 1,
          name: "Hasan",
          email: "hasan@gmail.com",
          phone: "1234324239",
        },
        {
          id: 2,
          name: "MM Mohi",
          email: "mohi@gmail.com",
          phone: "123456789",
        },
        {
          id: 3,
          name: "Zakaria",
          email: "zakaria@gmail.com",
          phone: "1232234789",
        },
      ],
    };
  }

  handleDeleteContact = (id) => {
    const { contacts } = this.state

    const newContacts = contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts: newContacts
    })
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        {contacts.map(contact => (
          <Contact onDeleteContact={this.handleDeleteContact} key={contact.id} contact={contact} />
        ))}
        {contacts.length <= 0 && <h1>No Contacts Here...</h1>}
      </>
    );
  }
}

export default Contacts;

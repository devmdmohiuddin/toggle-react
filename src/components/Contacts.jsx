import React, { Component } from "react";

import Contact from '../components/Contact'

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
  render() {
    const { contacts } = this.state;
    return (
      <>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </>
    );
  }
}

export default Contacts;

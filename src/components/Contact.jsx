import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  state = {
    showContactInfo: false,
  };

  handleShow = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDeleteContact = (id) => {
    this.props.onDeleteContact(id)
  }

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>
        <h3>
          {contact.name}{" "}
          <i onClick={this.handleShow} style={{cursor: 'pointer'}} className='fas fa-sort-down'></i>
          <i onClick={() => this.onDeleteContact(contact.id)} style={{cursor: 'pointer', float: 'right', color: 'red'}} className='fas fa-times'></i>
        </h3>
        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {contact.email}</li>
            <li className='list-group-item'>Phone: {contact.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;

import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  state = {
    showContactInfo: false,
  };

  handleShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  render() {
    const { contact } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>
        <h3>
          {contact.name}{" "}
          <i onClick={this.handleShowClick} className='fas fa-sort-down'></i>
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

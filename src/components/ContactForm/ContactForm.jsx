import PropTypes from 'prop-types';
import { Component } from 'react';

import { LableName, FormInput, FormButton } from './ContactForm.styled';

export class ContactForm extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { contacts } = this.props;
    const { name } = this.state;
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      this.props.onSubmit(this.state);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <LableName>Name</LableName>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <LableName>Number</LableName>
        <label>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}

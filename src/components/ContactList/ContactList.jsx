import PropTypes from 'prop-types';

import { ContactUl, ContactLi } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactUl>
      {contacts.map(({ id, name, number }) => (
        <ContactLi key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContactItem={onDeleteContact}
          />
        </ContactLi>
      ))}
    </ContactUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

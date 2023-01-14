import PropTypes from 'prop-types';
import { ContactText, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ id, number, name, onDeleteContactItem }) => {
  return (
    <>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteButton
        type="button"
        onClick={() => {
          onDeleteContactItem(id);
        }}
      >
        Delete
      </DeleteButton>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContactItem: PropTypes.func.isRequired,
};

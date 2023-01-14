import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        <FilterInput
          type="text"
          value={filter}
          onChange={onChange}
        ></FilterInput>
      </label>
    </form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

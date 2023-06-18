import React from 'react';
import PropTypes from 'prop-types';
import { Label, Text } from './styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name{' '}
      <Text type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

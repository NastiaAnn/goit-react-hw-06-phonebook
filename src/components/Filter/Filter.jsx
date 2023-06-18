import React from 'react';
import { Label, Text } from './styled';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    const inputValue = event.currentTarget.value;
    dispatch(handleFilter(inputValue));
  };

  return (
    <Label>
      Find contacts by name
      <Text type="text" onChange={handleFilterChange} />
    </Label>
  );
};

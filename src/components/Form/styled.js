import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 25px;
  font-weight: 500;
`;

export const FormText = styled.input`
  display: inline-block;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 800;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 800;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

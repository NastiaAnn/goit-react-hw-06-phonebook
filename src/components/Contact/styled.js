import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  border: 1px solid black;
`;

export const Text = styled.p`
  margin: 0px 0px;
  font-size: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 800;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

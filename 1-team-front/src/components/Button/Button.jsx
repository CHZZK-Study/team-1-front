/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: backgroun-color 0.3s;
  margin: 5px;

  background-color: ${({ type }) => {
    switch (type) {
      case 'primary':
        return '#007bff';
      case 'success':
        return '#28a745';
      case 'danger':
        return '#dc3545';
      case 'warning':
        return '#ffc107';
      case 'info':
        return '#17a2b8';
      case 'light':
        return '#f8f9fa';
      case 'dark':
        return '#343a40';
      default:
        return '#808080';
    }
  }};

  color: ${({ type }) =>
    type === 'warning' || type === 'light' ? 'black' : 'white'};
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;


const NewButton = ({ type, label, HashChechbox }) => {
  return (
    <StyledButton type={type}>
      {HashChechbox && <Checkbox />}
      {label}
    </StyledButton>
  );
};

export default NewButton;

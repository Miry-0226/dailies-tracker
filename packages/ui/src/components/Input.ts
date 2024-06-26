import styled from 'styled-components';

export const Input = styled.input`
  border: 3px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: 'ZH', sans-serif;
  padding: 16px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

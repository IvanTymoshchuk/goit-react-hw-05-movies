import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 100px;
  margin: 10px;
  padding: 5px;
  border: none;
  background: transparent;
  border-radius: 4px;
  outline: 2px solid black;

  :hover {
    color: white;
    background-color: tomato;
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
`;

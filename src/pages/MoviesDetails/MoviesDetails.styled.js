import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: block;
  text-align: center;
  border-bottom: 1px solid black;
`;
export const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  color: black;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  outline: 2px solid black;
  border-radius: 5px;
  padding: 5px;

  :hover {
    background: tomato;
    color: white;
  }
`;

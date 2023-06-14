import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  list-style: none;
  padding: 15px;
  margin: 0;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: red;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  width: 200px;
  height: 355px;

  :hover {
    scale: 1.1;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

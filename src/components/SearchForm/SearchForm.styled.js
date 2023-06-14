import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 15px;
  background: transparent;

  :hover {
    color: white;
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-right: 10px;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;
  :hover {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;
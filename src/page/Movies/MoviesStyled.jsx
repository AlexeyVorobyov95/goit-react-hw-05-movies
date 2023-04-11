import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  padding-top: 50px;
  align-items: center;
`;
export const Input = styled.input`
font-weight: 700;
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 300px;
  height: 40px;
  font-size: 18px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  margin-right: 30px;
  outline: none;
  &:hover,
  :focus {
    box-shadow: 0px 0px 20px 0px #ffa500;
  }
`;

export const SearchBtn = styled.button`
  font-weight: 700;
  width: 150px;
  height: 60px;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  &:hover,
  :focus {
    background-color: #ffa500;
  }
`;

export const List = styled.ul`
margin-top: 30px;
  width: 360px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
`;

export const Items = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
`;
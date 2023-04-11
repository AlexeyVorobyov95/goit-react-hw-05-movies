import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 30px;
  padding-left: 20px;
`;

export const LinkToBack = styled(NavLink)`
  display: block;
  width: 100px;
  background-color: white;
  font-weight: 700;
  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  &:hover,
  :focus {
    background-color: orange;
    color: black;
  }
`;

export const Container = styled.div`
  margin-top: 20px;
  display: block;
  padding: 30px 20px 20px 20px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
`;

export const CardContainer = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-weight: 700;
`;

export const FilmInfo = styled.div`
  margin-left: 30px;
  gap: 20px;
`;

export const ListCardFilm = styled.ul`
  width: 360px;
`;

export const ContainerGenres = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
`;
export const ListGenres = styled.ul`
  display: flex;
  gap: 10px;
`;
export const SpanKey = styled.span`
  font-weight: 700;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const InfoItems = styled.li`
  font-weight: 700;
  background-color: orange;
  
  border-radius: 20px;
`;

export const LinkDetailsInfo = styled(NavLink)`
  display: block;
  padding: 23px;
  &:hover,
  :focus {
    color: white;
  }
`;

import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const DetailFilmCardMain = styled.div`
  display: flex;
`;

export const FilmPoster = styled.img`
  width: 300px;
  border-radius: 4px;
`;

export const FilmMainInfo = styled.tbody`
  & tr {
    vertical-align: baseline;
  }
`;
export const FilmInfoName = styled.td`
  width: 20%;
  font-size: 16px;
  font-weight: 700;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  background-color: #24e3f2;
  padding: 10px;
  border-radius: 5px;
  color: #282828;
  &:active {
    background-color: #18a9b5;
  }
`;
export const MoreInformationFilmCard = styled.div`
  gap: 20px;
  margin-top: 20px;
`;

export const MoreInformationButton = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  background-color: #24e3f2;
  padding: 10px;
  border-radius: 5px;
  color: #282828;
  &:active {
    background-color: #18a9b5;
  }
  &.active {
    background-color: #18a9b5;
  }
`;

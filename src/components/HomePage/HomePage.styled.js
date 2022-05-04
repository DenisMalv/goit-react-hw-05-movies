import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomePageList = styled.ul`
  display: flex;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  list-style: none;
`;

export const Film = styled.li`
  display: block;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: transform 200ms ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
`;

export const FilmDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 80px;
`;

export const FilmRating = styled.p`
  font-family: Roboto;

  text-decoration: none;
  color: #282828;
  padding: 5px;
  margin: 10px;
  width: 32px;
  text-align: center;
  border: 1px solid black;
  border-radius: 50%;
`;

export const FilmTitle = styled.p`
display:block
  font-family: Roboto;

  text-decoration: none;
  color: #282828;
  padding: 10px;
  margin: 0;

`;

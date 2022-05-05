import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: block;
  background: linear-gradient(#787878, #e4fcff);
  min-height: 50px;
  margin-bottom: 20px;
`;

export const Homepage = styled(Link)`
  display: block;
  padding: 10px 0;
  max-width: 150px;

  font-family: 'Oleo Script Swash Caps', cursive;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  color: #000;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
`;

export const Footer = styled.footer`
  display: block;
  background: linear-gradient(#e4fcff, #787878);
  min-height: 50px;
  text-align: center;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 15px;
`;

export const NavHomepage = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const NavMovie = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;
  padding: 10px;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const MainContent = styled.main`
  min-height: 84.3vh;
  font-family: Roboto;
`;

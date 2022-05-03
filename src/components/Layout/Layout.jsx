import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <h1>Homepage</h1>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </>
  );
};

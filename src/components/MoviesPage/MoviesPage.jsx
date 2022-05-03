import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {});
  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
  };
  const handleInputEvent = event => {
    const { value } = event.currentTarget;
    setQuery(value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query" onChange={handleInputEvent} />
        </label>
        <button type="submit">search</button>
      </form>
      <Outlet />
    </>
  );
};

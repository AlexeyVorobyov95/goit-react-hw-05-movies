import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApi } from '../../Api/Api';
import { Link, useLocation } from 'react-router-dom';
import { Input, Items, List, SearchBtn, SearchForm } from './MoviesStyled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get(`name`);
  const location = useLocation();

  const [films, setFilms] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target[0].value === '') {
    }
    setSearchParams({ name: evt.target[0].value });
  };

  const filterFilns = films.filter(({ title }) =>
    title.toLowerCase().includes(name.toLowerCase())
  );

  useEffect(() => {
    if (name === null) {
      return;
    }
    getApi(`search`, `${name}`).then(film => {
      setFilms(() => {
        return [...film.data.results];
      });
    });
  }, [name]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <label>
          <Input type="text" />
        </label>
        <SearchBtn type="submit">SEARCH FILMS</SearchBtn>
      </SearchForm>

      {films.length > 0 &&
        <List>
          {filterFilns.map(({ id, title, name }) => (
            <Items key={id}>
              {title ? (
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              ) : (
                <Link to={`${id}`} state={{ from: location }}>
                  {name}
                </Link>
              )}
            </Items>
          ))}
        </List>
      }
    </>
  );
};

export default Movies;

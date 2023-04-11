import { useEffect, useState } from 'react';
import { getApi } from '../../Api/Api';
import { Link, useLocation } from 'react-router-dom';
import { Container, Items, List, Title } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getApi(`trending`).then(film => {
      setFilms(() => {
        return [...film.data.results];
      });
    });
  }, []);

  return (
    <Container>
      <Title>TRANDING TODAY</Title>
      <List>
        {films.map(({ id, title, name }) => (
          <Items key={id}>
            {title ? (
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            ) : (
              <Link to={`movies/${id}`} state={{ from: location }}>
                {name}
              </Link>
            )}
          </Items>
        ))}
      </List>
    </Container>
  );
};

export default Home;

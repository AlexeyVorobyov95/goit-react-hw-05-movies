import { getApi } from 'Api/Api';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  FilmInfo,
  Container,
  ContainerGenres,
  LinkToBack,
  Title,
  SpanKey,
  ListGenres,
  CardContainer,
  InfoList,
  InfoItems,
  LinkDetailsInfo,
} from './MovieDetails.Styled';

const MovieDetails = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? `/`);

  useEffect(() => {
    getApi(`movie`, movieId).then(movie => {
      setFilm(() => {
        return [movie.data];
      });
    });
  }, [movieId]);
  return (
    <>
      <LinkToBack to={backLinkLocationRef.current}>GO TO BACK</LinkToBack>
      <Title>MovieDetails</Title>

      {film.map(
        ({
          id,
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
          genres,
        }) => (
          <Container key={id}>
            <CardContainer>
              <img
                src={'https://image.tmdb.org/t/p/w200/' + poster_path}
                alt=""
              />

              <FilmInfo>
                <h2>
                  {title} ({release_date.slice(0, 4)})
                </h2>
                <p>
                  <SpanKey>Rating:</SpanKey> {`${vote_average}`.slice(0, 3)}
                </p>

                <ContainerGenres>
                  <SpanKey>
                    <p>Ganres:</p>
                  </SpanKey>
                  <ListGenres>
                    {genres.map(({ id, name }) => (
                      <li key={id}>
                        <p>{name}</p>
                      </li>
                    ))}
                  </ListGenres>
                </ContainerGenres>
                <p>
                  <SpanKey>Overview:</SpanKey> {overview}
                </p>
              </FilmInfo>
            </CardContainer>
            <InfoList>
              <InfoItems>
                <LinkDetailsInfo  to="cast">Cast</LinkDetailsInfo>
              </InfoItems>
              <InfoItems>
                <LinkDetailsInfo to="reviews">Reviews</LinkDetailsInfo>
              </InfoItems>
            </InfoList>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        )
      )}
    </>
  );
};

export default MovieDetails;

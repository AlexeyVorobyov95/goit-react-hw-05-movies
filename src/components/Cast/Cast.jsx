import { getApi } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Items, List, SpanKey } from './CastStyled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getApi(`credits`, movieId).then(actor => {
      setActors(() => {
        return [...actor.data.cast];
      });
    });
  }, [movieId]);

  return (
    <div>
      <List>
        {actors.map(({ id, name, character, profile_path }) => (
          <Items key={id}>
            {profile_path ? (
              <>
                <img
                  src={'https://image.tmdb.org/t/p/w200/' + profile_path}
                  alt={name}
                />
                <p>
                  <SpanKey>Name:</SpanKey> {name}
                </p>
                <p>
                  <SpanKey>Character:</SpanKey> {character}
                </p>
              </>
            ) : (
              <>
                <img src={'https://placeholder.com/200x300'} alt={name} />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </>
            )}
          </Items>
        ))}
      </List>
    </div>
  );
};

export default Cast;

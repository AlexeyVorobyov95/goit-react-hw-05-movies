import { getApi } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Items, SpanKey } from './ReviewsStyled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getApi(`reviews`, movieId).then(review => {
      setReviews(() => {
        return [...review.data.results];
      });
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <Items key={id}>
          <p>
            <SpanKey>Nickname:</SpanKey> {author}
          </p>
          <p>
            <SpanKey>Massage: </SpanKey>
            {content}
          </p>
        </Items>
      ))}
    </ul>
  );
};

export default Reviews;

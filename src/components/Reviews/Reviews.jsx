import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../service/fetchAPI';
import { Reviewscard } from './Reviews.styled';

const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => {
      setMoviesReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        moviesReviews.map(({ id, author, content }) => {
          return (
            <Reviewscard key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </Reviewscard>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};
export default Reviews;

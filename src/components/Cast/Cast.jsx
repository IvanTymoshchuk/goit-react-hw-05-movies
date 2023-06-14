import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../service/fetchAPI';
import { AiOutlineFileImage } from 'react-icons/ai';
import { CastCard, CastContainer, Paragraf } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => {
      setMoviesCast(cast);
    });
  }, [movieId]);

  return (
    <CastContainer>
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <CastCard key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <AiOutlineFileImage size={200} />
            )}

            <Paragraf>{name}</Paragraf>

            <Paragraf>Character : {character.substr(0, 9)}</Paragraf>
          </CastCard>
        ))
      ) : (
        <Paragraf> Sorry, there isn't any info</Paragraf>
      )}
    </CastContainer>
  );
};
export default Cast;

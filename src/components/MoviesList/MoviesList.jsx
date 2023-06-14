import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import { List, Li, Links, Card ,Img} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Li key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {title}
                </Card>
              </Links>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;

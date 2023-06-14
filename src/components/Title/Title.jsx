import PropTypes from 'prop-types';
import { TitleText } from './Title.styled';

const Title = ({ title }) => {
  return (
    <>
      <TitleText>{title}</TitleText>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

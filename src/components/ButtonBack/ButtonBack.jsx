import { FiArrowLeftCircle } from 'react-icons/fi';
import { Button, LinkBack } from './ButtonBack.styled';

const ButtonBack = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button>
        <FiArrowLeftCircle /> Come Back
      </Button>
    </LinkBack>
  );
};

export default ButtonBack;

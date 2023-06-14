import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎞️
          </span>{' '}
          Search Movies Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;

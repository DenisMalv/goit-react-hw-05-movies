import { Container } from 'components/App.styled';
import {
  Header,
  Homepage,
  Footer,
  NavHomepage,
  NavMovie,
  Navigation,
  MainContent,
} from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Homepage to="/">Movie Site</Homepage>
          <Navigation>
            <NavHomepage to="/">Homepage</NavHomepage>
            <NavMovie to="/movies">Movies</NavMovie>
          </Navigation>
        </Container>
      </Header>
      <MainContent>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
      <Footer>
        <Container>
          <div>footer</div>
        </Container>
      </Footer>
    </>
  );
};

export default Layout;

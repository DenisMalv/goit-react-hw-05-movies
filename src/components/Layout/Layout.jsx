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
          <Outlet />
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

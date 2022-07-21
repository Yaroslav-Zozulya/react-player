import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
// import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/preview">Preview</Link>
        <Link to="/list">List</Link>
        <Link to="/create">Create</Link>
      </Nav>
      <Outlet />
      {/* <GlobalStyles /> */}
    </Wrapper>
  );
};

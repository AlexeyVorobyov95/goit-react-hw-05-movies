import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ActivNavLink, Nav } from './LayoutStyld';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <ActivNavLink to="/">Home</ActivNavLink>
          <ActivNavLink to="/movies">Movies</ActivNavLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

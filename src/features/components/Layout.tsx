import React, { FC, memo } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <p>footer</p>
        </div>
      </footer>
    </>
  );
};

export default memo(Layout);

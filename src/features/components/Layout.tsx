import React, { FC, memo } from 'react';
import { Outlet } from 'react-router';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout: FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <br />
      <Footer />
    </div>
  );
};

export default memo(Layout);

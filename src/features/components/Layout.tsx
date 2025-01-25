import React, { FC, memo } from 'react';
import { Outlet } from 'react-router';

import NavBar from './NavBar';
import Footer from './Footer';
import { Modal } from 'features/ui';

interface IProps {
  loading: boolean;
}
const Layout: FC<IProps> = ({ loading }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Modal isVisible={loading} setIsVisible={() => {}}>
        <p className='text-4xl'>Loading...</p>
      </Modal>
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

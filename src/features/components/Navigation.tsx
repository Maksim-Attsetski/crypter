import React, { FC, memo, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { Auth, Creators, Discover, Home, Nft, Sell, Stats } from 'pages';
import { navLinksData } from 'features/data';
import { useNft, useUsers } from 'sliced';

import Layout from './Layout';

const Navigation: FC = () => {
  const { onGetAllNft } = useNft();
  const { onGetUsers } = useUsers();

  const onGetAll = async () => {
    await onGetAllNft();
    await onGetUsers();
  };

  useEffect(() => {
    onGetAll();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={navLinksData.home} element={<Home />} />
          <Route path={navLinksData.sell} element={<Sell />} />
          <Route path={navLinksData.stats} element={<Stats />} />
          <Route path={navLinksData.creators} element={<Creators />} />
          <Route path={navLinksData.discover} element={<Discover />} />
          <Route path={navLinksData.discover + '/:id'} element={<Nft />} />
        </Route>
      </Routes>
      <Routes>
        <Route path={navLinksData.auth} element={<Auth />} />
      </Routes>
    </>
  );
};

export default memo(Navigation);

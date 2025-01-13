import React, { FC, memo, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import {
  Auth,
  Creators,
  Discover,
  Home,
  Nft,
  Profile,
  Sell,
  Stats,
} from 'pages';
import { navLinksData } from 'features/data';
import { useNft, useUsers } from 'sliced';

import Layout from './Layout';
import { useAuth } from 'sliced/auth';
import { useWallet } from 'sliced/wallet';

const Navigation: FC = () => {
  const { onGetAllNft } = useNft();
  const { onGetUsers } = useUsers();
  const { onGetUserAfterReload } = useAuth();
  const { onGetMyWallet } = useWallet();

  const onGetAll = async () => {
    const id = await onGetUserAfterReload();
    console.log('id', id);

    if (id) {
      await onGetMyWallet(id);
    }

    await onGetAllNft(id);
    await onGetUsers();
  };

  useEffect(() => {
    onGetAll();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path={navLinksData.home} element={<Home />} />
        <Route path={navLinksData.sell} element={<Sell />} />
        <Route path={navLinksData.stats} element={<Stats />} />
        <Route path={navLinksData.creators} element={<Creators />} />
        <Route path={navLinksData.discover} element={<Discover />} />
        <Route path={navLinksData.discover + '/:id'} element={<Nft />} />
        <Route path={navLinksData.profile} element={<Profile />} />
        <Route path={navLinksData.profile + '/:id'} element={<Profile />} />
      </Route>
      <Route path={navLinksData.auth} element={<Auth />} />
    </Routes>
  );
};

export default memo(Navigation);

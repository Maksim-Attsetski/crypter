import React, { FC, memo, useEffect, useState } from 'react';
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

  const [loading, setLoading] = useState<boolean>(true);

  const onGetAll = async () => {
    setLoading(true);

    try {
      const id = await onGetUserAfterReload();
      if (id) {
        await onGetMyWallet(id);
      }

      await onGetAllNft(id);
      await onGetUsers();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout loading={loading} />}>
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

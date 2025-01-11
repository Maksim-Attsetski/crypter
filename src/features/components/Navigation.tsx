import React, { FC, memo, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { Creators, Discover, Home, Sell, Stats } from 'pages';
import { navLinksData } from 'features/data';
import { useNft } from 'sliced';

import Layout from './Layout';

const Navigation: FC = () => {
  const { onGetAllNft } = useNft();

  const onGetAll = async () => {
    await onGetAllNft();
  };

  useEffect(() => {
    onGetAll();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path={navLinksData.home} element={<Home />} />
        <Route path={navLinksData.discover} element={<Discover />} />
        <Route path={navLinksData.sell} element={<Sell />} />
        <Route path={navLinksData.stats} element={<Stats />} />
        <Route path={navLinksData.creators} element={<Creators />} />
      </Route>
    </Routes>
  );
};

export default memo(Navigation);

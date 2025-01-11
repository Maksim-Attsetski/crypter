import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router';
import { Creators, Discover, Home, Sell, Stats } from 'pages';
import { navLinksData } from 'features/data';
import Layout from './Layout';

const Navigation: FC = () => {
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

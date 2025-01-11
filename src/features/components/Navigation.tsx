import React, { FC, memo } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from 'pages';

const Navigation: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default memo(Navigation);

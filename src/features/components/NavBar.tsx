import React, { FC, memo, useMemo, useState } from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router';
import { navLinksData } from 'features/data';
import SearchInput from './SearchInput';
import ConnectWalletBtn from './ConnectWalletBtn';

const NavBar: FC = () => {
  const navLinks = useMemo(() => {
    return [
      { name: 'discover', path: navLinksData.discover },
      { name: 'creators', path: navLinksData.creators },
      { name: 'sell', path: navLinksData.sell },
      { name: 'stats', path: navLinksData.stats },
    ];
  }, []);

  return (
    <header className='container'>
      <div className='flex gap-7 py-3 items-center justify-between'>
        <NavLink to={'/'}>
          <img src={logo} className='' alt='logo' />
        </NavLink>
        <nav className='flex gap-7 items-center'>
          {navLinks.map((link) => (
            <NavLink className={'uppercase'} key={link.path} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <SearchInput />
        <ConnectWalletBtn />
      </div>
    </header>
  );
};

export default memo(NavBar);

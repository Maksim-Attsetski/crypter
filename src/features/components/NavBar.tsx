import React, { FC, memo, useMemo } from 'react';
import { NavLink } from 'react-router';

import { navLinksData } from 'features/data';
import Logo from 'assets/Logo';

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
          <Logo />
        </NavLink>
        <nav className='flex gap-7 items-center'>
          {navLinks.map((link) => (
            <NavLink
              className={
                'uppercase transition-all duration-300 text-[#606060] hover:text-dark'
              }
              key={link.path}
              to={link.path}
            >
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

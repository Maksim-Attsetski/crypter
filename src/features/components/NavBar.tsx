import React, { FC, memo, useMemo } from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router';
import { navLinksData } from 'features/data';

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
    <div>
      <img src={logo} className='App-logo' alt='logo' />
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(NavBar);

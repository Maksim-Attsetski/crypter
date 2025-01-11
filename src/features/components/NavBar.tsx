import React, { FC, memo, useMemo } from 'react';
import logo from 'assets/logo.svg';
import { NavLink } from 'react-router';

const NavBar: FC = () => {
  const navLinks = useMemo(() => {
    return [
      { name: 'Discover', path: '/discover' },
      { name: 'creators', path: '/creators' },
      { name: 'sell', path: '/sell' },
      { name: 'stats', path: '/stats' },
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

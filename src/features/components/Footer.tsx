import React, { FC, memo } from 'react';

import { NavLink } from 'react-router';

import Logo from 'assets/Logo';
import { navLinksData } from 'features/data';

const Footer: FC = () => {
  return (
    <footer className='mt-auto bg-black text-white'>
      <br />
      <div className='container'>
        <div className='flex justify-between'>
          <div className='flex gap-3 items-center'>
            <Logo fill='#fff' />
            <p className='text-3xl font-semibold'>Crypter Sea</p>
          </div>
          <div className='flex gap-6 items-center'>
            <NavLink
              className={'hover:text-white text-[#B9B9B9]'}
              to={navLinksData.creators}
            >
              Privacy Policy
            </NavLink>
            <NavLink
              className={'hover:text-white text-[#B9B9B9]'}
              to={navLinksData.creators}
            >
              Term & Conditions
            </NavLink>
            <NavLink
              className={'hover:text-white text-[#B9B9B9]'}
              to={navLinksData.creators}
            >
              About Us
            </NavLink>
            <NavLink
              className={'hover:text-white text-[#B9B9B9]'}
              to={navLinksData.creators}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <br />
        <div className='w-full h-[0.5px] bg-slate-300' />
        <br />
        <div>
          <p className={'text-[#B9B9B9]'}>© 2023 EATLY All Rights Reserved.</p>
        </div>
      </div>
      <br />
    </footer>
  );
};

export default memo(Footer);

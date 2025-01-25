import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { NavLink } from 'react-router';

import { navLinksData } from 'features/data';
import Logo from 'assets/Logo';

import SearchInput from './SearchInput';
import ConnectWalletBtn from './ConnectWalletBtn';
import { Button } from 'features/ui';
import { motion } from 'framer-motion';

interface ILinkListProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LinkList: FC<ILinkListProps> = memo(({ setIsOpen }) => {
  const navLinks = useMemo(() => {
    return [
      { name: 'discover', path: navLinksData.discover },
      { name: 'creators', path: navLinksData.creators },
      { name: 'sell', path: navLinksData.sell },
      { name: 'stats', path: navLinksData.stats },
    ];
  }, []);

  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          className={
            'uppercase transition-all duration-300 text-[#606060] hover:text-dark'
          }
          key={link.path}
          to={link.path}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
});

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen((prev) => {
      document.body.classList.toggle('overflow-hidden', !prev);
      return !prev;
    });
  };

  return (
    <>
      <header className='container'>
        <div className='flex gap-7 py-3 items-center justify-between'>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
          <nav className='hidden md:flex gap-7 items-center'>
            <LinkList setIsOpen={setIsOpen} />
          </nav>
          <div className='lg:flex hidden gap-3'>
            <SearchInput />
            <ConnectWalletBtn />
          </div>
          <div className='lg:hidden flex gap-2'>
            <ConnectWalletBtn />
            <Button onClick={onToggleMenu}>
              <motion.p
                animate={{ rotate: isOpen ? 45 : 0, scale: 2.5 }}
                initial={{ rotate: 0 }}
              >
                +
              </motion.p>
            </Button>
          </div>
        </div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          className='fixed z-50 left-0 bg-white w-full h-full flex flex-col gap-4 items-center'
        >
          <LinkList setIsOpen={setIsOpen} />
        </motion.div>
      </header>
    </>
  );
};

export default memo(NavBar);

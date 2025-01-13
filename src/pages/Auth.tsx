import Logo from 'assets/Logo';
import { Button, Input } from 'features/ui';
import React, { FC, memo, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { IUser } from 'sliced';
import { useAuth } from 'sliced/auth';

import heroItemImg from 'assets/hero_item.png';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinksData } from 'features/data';
import { useWallet } from 'sliced/wallet';

type TAuthMethod = 'login' | 'signup';

const Auth: FC = () => {
  const { onSignIn, onSignUp, user } = useAuth();
  const { onGetMyWallet } = useWallet();
  const navigate = useNavigate();

  const [authMethod, setAuthMethod] = useState<TAuthMethod>('signup');

  const [name, setName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onSaveInfo = async () => {
    try {
      if (authMethod === 'login') {
        await onSignIn({ email, password });
      } else {
        const newUser = {
          background: 1,
          bio,
          name,
          fullName,
          email,
        } as IUser;
        await onSignUp({ email, password }, newUser);
      }
    } catch (error: any) {
      console.error('error', error);
      alert(error?.message);
    }
  };

  useEffect(() => {
    if (user?.uid) {
      (async () => {
        await onGetMyWallet();
        navigate(navLinksData.home);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid]);

  return (
    <div className='bg-gradient-to-r from-[#F9F9F9] from-0% via-[#F9F9F9] via-50% to-50% to-dark'>
      <article className='flex justify-between container h-screen'>
        <section className='flex-1 px-5'>
          <br />
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
          <br />
          <h2 className='text-center mb-2 text-2xl font-semibold'>
            Already have an account ?
          </h2>
          <form className='flex flex-col gap-2 w-3/4 mx-auto'>
            <Input
              value={email}
              setValue={setEmail}
              placeHolder='Your e-mail'
              type='email'
            />
            <Input
              value={password}
              setValue={setPassword}
              placeHolder='Password'
              type='password'
            />
            <AnimatePresence>
              {authMethod === 'signup' && (
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0.4, x: -50 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  <Input
                    value={name}
                    setValue={setName}
                    placeHolder='Your name'
                  />
                  <div className='my-2'></div>
                  <Input
                    value={fullName}
                    setValue={setFullName}
                    placeHolder='Your full name'
                  />
                  <div className='my-2'></div>
                  <Input
                    value={bio}
                    setValue={setBio}
                    placeHolder='Something about you'
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          <br />
          <div className='w-full flex gap-3'>
            <Button
              outlined
              onClick={() =>
                setAuthMethod((prev) => (prev === 'login' ? 'signup' : 'login'))
              }
            >
              {authMethod === 'login' ? 'Sign up' : 'Log in'}
            </Button>
            <br />
            <Button className='flex-1' onClick={onSaveInfo}>
              Continue
            </Button>
          </div>
        </section>
        <section className='flex-1 px-5'>
          <br />
          <br />
          <br />
          <img
            src={heroItemImg}
            alt='heroItemImg'
            className='w-3/5 mx-auto object-contain'
          />
          <h2 className='text-4xl text-center font-semibold text-white'>
            Start Your Own NFT Gallery
          </h2>
          <br />
          <p className='text-textGrey text-center'>
            CloseSea Is A Great Platform For Discover Largest NFTs And Other
            Stuff !!
          </p>
        </section>
      </article>
    </div>
  );
};

export default memo(Auth);

import { Button } from 'features/ui';
import React, { FC, memo } from 'react';

import heroHeader from 'assets/hero_header.png';
import { navLinksData } from 'features/data';

const Home: FC = () => {
  return (
    <div className='mt-5'>
      <section className='absolute top-16 right-0 w-1/2 h-44 -z-[1]'>
        <img src={heroHeader} alt='hero' />
      </section>

      <article className='container'>
        <section className='w-1/2'>
          <h2 className='text-7xl'>Discover And Create NFTs</h2>
          <br />
          <p className='text-textGrey'>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a{' '}
            <span className='text-black font-semibold'>$20 bonus</span>.
          </p>
          <br />
          <div className='flex gap-6'>
            <Button to={navLinksData.discover}>Explore more</Button>
            <Button to={navLinksData.sell} outlined>
              Create NFT
            </Button>
          </div>
          <br />
          <br />
          <div className='flex gap-7'>
            <div>
              <p className='text-3xl font-semibold'>454K+</p>
              <p className='text-textGrey text-xs'>Art Works</p>
            </div>
            <div>
              <p className='text-3xl font-semibold'>159K+</p>
              <p className='text-textGrey text-xs'>Creators</p>
            </div>
            <div>
              <p className='text-3xl font-semibold'>87K+</p>
              <p className='text-textGrey text-xs'>Collections</p>
            </div>
          </div>
        </section>
      </article>
      <br />
      <br />
      <br />
      <article className='bg-[#F1F1F1]'>
        <section className='container'>
          <br />
          <h2 className='text-center text-textGrey opacity-40 text-4xl font-semibold'>
            Weekly — Top NFT
          </h2>
          <br />
        </section>
      </article>
    </div>
  );
};

export default memo(Home);

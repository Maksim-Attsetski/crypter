import React, { FC, memo } from 'react';

import { Button, Description } from 'features/ui';
import { navLinksData } from 'features/data';

import { NftListWithFilters, TopNftList } from 'sliced';

import heroHeader from 'assets/hero_header.png';

const Home: FC = () => {
  return (
    <div className='mt-5'>
      <article>
        <section className='absolute top-16 right-0 w-1/2 h-44 -z-[1] hidden md:block'>
          <img src={heroHeader} alt='hero' />
        </section>

        <section className='container'>
          <div className='md:w-1/2'>
            <h2 className='text-5xl md:text-7xl'>Discover And Create NFTs</h2>
            <br />
            <p className='text-textGrey'>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{' '}
              <span className='text-dark font-semibold'>$20 bonus</span>.
            </p>
            <br />
            <div className='flex gap-6'>
              <Button to={navLinksData.discover}>Explore more</Button>
              <Button to={navLinksData.sell} outlined>
                Create NFT
              </Button>
            </div>
            <div className='my-3 md:my-8' />

            <Description.Group
              options={[
                { title: '454K+', children: 'Art Works' },
                { title: '159K+', children: 'Creators' },
                { title: '87K+', children: 'Collections' },
              ]}
            />
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
          <TopNftList />
          <br />
        </section>
      </article>

      <article>
        <NftListWithFilters />
      </article>
    </div>
  );
};

export default memo(Home);

import React, { FC, memo, useMemo, useState } from 'react';

import { useNft } from '../useNft';
import SmallNFT from './SmallNFT';
import { INft } from '../types';
import { Button } from 'features/ui';

const sortOptions = [
  { value: 'all', label: 'All' },
  { value: 'price', label: 'Price' },
  { value: 'end_at', label: 'End soon' },
  { value: 'created_at', label: 'Recently created' },
];

const NftListWithFilters: FC = () => {
  const { nft } = useNft();
  const [sortBy, setSortBy] = useState<keyof INft | 'all'>('all');
  const [sortWay, setSortWay] = useState<'desc' | 'asc'>('asc');

  const filteredNft = useMemo(() => {
    if (sortBy === 'all') return nft.slice(0, 7);

    const sortFunc = (arr: [INft, INft]) => {
      return +(arr[0][sortBy] ?? 0) - +(arr[1][sortBy] ?? 0);
    };

    return [...nft]
      .sort((a, b) => sortFunc(sortWay === 'asc' ? [a, b] : [b, a]))
      .slice(0, 8);
  }, [nft, sortBy, sortWay]);

  const onClickOnSortBtn = (by: keyof INft | 'all') => {
    if (sortBy === by) {
      setSortWay((prev) => (prev === 'desc' ? 'asc' : 'desc'));
    }
    setSortBy(by);
  };

  return (
    <article className='container py-6'>
      <section>
        <div className='flex gap-2 items-center'>
          <p className='font-semibold text-2xl mr-3'>
            {sortWay === 'desc' ? 'Desc' : 'Asc'}
          </p>
          {sortOptions.map(({ label, value }) => (
            <Button
              outlined={sortBy !== value}
              key={value}
              onClick={() => onClickOnSortBtn(value as keyof INft)}
            >
              {label}
            </Button>
          ))}
        </div>
      </section>
      <br />
      <section className='flex gap-2'>
        {filteredNft.map((item) => (
          <SmallNFT nft={item} key={item.id} />
        ))}
      </section>
    </article>
  );
};

export default memo(NftListWithFilters);

import React, { FC, memo, useMemo } from 'react';

import { Button } from 'features/ui';

import eth from 'assets/eth.svg';

import { IBid, INft } from '../types';
import { dateHelper } from 'features/helpers';
import { sbStorageUrl } from 'features/supabase';

interface IProps {
  nft: INft;
}

const SmallNFT: FC<IProps> = ({ nft }) => {
  const currentBid = useMemo(
    () => nft.bids.reduce((acc, val: IBid) => acc + val?.price, 0),
    [nft?.bids]
  );

  return (
    <div className='relative w-max bg-white p-4 rounded-2xl shadow-xl shadow-[#c7c7c7c3]'>
      <p className='absolute top-6 right-6 text-white p-2 rounded-lg bg-[#1C1D2059]'>
        {dateHelper.getUntil(nft.end_at)}
      </p>
      <img
        className='h-52 w-52 rounded-xl mb-4'
        src={`${sbStorageUrl}nft/${nft.image_url}`}
        alt={nft.name}
      />

      <p className='font-semibold text-2xl text-black'>{nft.name}</p>
      <div className='flex gap-3 justify-between'>
        <div>
          <p className='text-sm font-normal text-[#94A3B8]'>Current bid</p>
          <p className='flex items-center gap-1'>
            <img src={eth} alt='eth' />
            {currentBid > 0 ? currentBid : nft.price}
          </p>
        </div>
        <Button>PLACE BID</Button>
      </div>
    </div>
  );
};

export default memo(SmallNFT);

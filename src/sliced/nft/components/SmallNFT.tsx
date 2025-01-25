import React, { FC, memo, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { Button, Card } from 'features/ui';
import { dateHelper } from 'features/helpers';
import { sbStorageUrl } from 'features/supabase';
import { navLinksData } from 'features/data';

import eth from 'assets/eth.svg';

import { INft } from '../types';

interface IProps {
  nft: INft;
}

const SmallNFT: FC<IProps> = ({ nft }) => {
  const navigation = useNavigate();

  const onClickOnNft = () => {
    navigation(navLinksData.discover + '/' + nft.id);
  };

  const remainedDate = useMemo(
    () => dateHelper.getUntil(nft.end_at),
    [nft.end_at]
  );

  return (
    <Card onClick={onClickOnNft} className='relative'>
      <p className='absolute top-6 right-6 text-white p-2 rounded-lg bg-[#1C1D2059]'>
        {remainedDate}
      </p>
      <img
        className='h-52 w-52 rounded-xl mb-4'
        src={`${sbStorageUrl}nft/${nft.image_url}`}
        alt={nft.name}
      />

      <p className='font-semibold text-2xl text-dark'>{nft.name}</p>
      <div className='flex gap-3 justify-between'>
        <div>
          <p className='text-sm font-normal text-[#94A3B8]'>Current bid</p>
          <p className='flex items-center gap-1'>
            <img src={eth} alt='eth' />
            {nft.price}
          </p>
        </div>
        <Button disabled={remainedDate === 'Expired'}>PLACE BID</Button>
      </div>
    </Card>
  );
};

export default memo(SmallNFT);

import React, { FC, memo, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router';

import { dateHelper } from 'features/helpers';
import { sbStorageUrl } from 'features/supabase';
import { Button, Card } from 'features/ui';
import { useNft } from 'sliced';

import eth from 'assets/eth.svg';
import wallet from 'assets/wallet.svg';

const subTextCls = 'text-[#8D8D8D]';

const Nft: FC = () => {
  const { nft: allNft } = useNft();
  const [owner, setOwner] = useState(null);
  const [creator, setCreator] = useState(null);

  const id = useParams()?.id;

  const nft = useMemo(
    () => allNft.find((item) => item.id === +(id ?? -1)),
    [id, allNft]
  );

  return nft ? (
    <div className='container'>
      <div className='flex items-center font-semibold text-4xl gap-3'>
        <Button outlined to='../'>
          {'<'}
        </Button>
        <p>Product details</p>
      </div>
      <br />
      <Card className='max-w-full gap-6 flex justify-between'>
        <div className='rounded-xl w-2/5 overflow-hidden my-auto'>
          <img
            className='rounded-xl object-contain'
            src={`${sbStorageUrl}nft/${nft.image_url}`}
            alt={nft.name}
          />
        </div>
        <section className='w-1/2 h-1/3'>
          <p className='text-center font-semibold text-5xl'>{nft.name}</p>
          <br />
          <p className='text-center font-medium text-[#888888B2]'>
            {nft.description}
          </p>
          <div className='flex justify-around my-3'>
            <div>
              <p className={subTextCls}>Created by</p>
              <p className='text-xl font-medium'>MaksimAttsetski</p>
            </div>
            <div>
              <p className={subTextCls}>Owned by</p>
              <p className='text-xl font-medium'>MaksimAttsetski</p>
            </div>
          </div>
          <div className='flex justify-around'>
            <div>
              <p className={subTextCls}>Current Bid</p>
              <div className='flex gap-2'>
                <img src={eth} alt='eth' />
                <p className='text-xl font-medium'>{nft?.price}</p>
              </div>
            </div>
            <div>
              <p className={subTextCls}>End in</p>
              <p className='text-xl font-medium'>
                {dateHelper.getDate(nft.end_at)}
              </p>
            </div>
          </div>
          <br />
          <br />
          <Button className='flex gap-2 w-full justify-center'>
            <img src={wallet} alt='wallet' />
            <span className='font-bold text-lg'>Place bid</span>
          </Button>
        </section>
      </Card>
    </div>
  ) : (
    <div>
      <p>Не найден</p>
      <NavLink to={'../'}>Назад</NavLink>
    </div>
  );
};

export default memo(Nft);

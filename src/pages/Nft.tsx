import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router';

import { dateHelper } from 'features/helpers';
import { sbStorageUrl } from 'features/supabase';
import { Button, Card, Description } from 'features/ui';
import { IUser, SmallNFT, useNft, useUsers, INft } from 'sliced';
import { useAuth } from 'sliced/auth';

import Eth from 'assets/Eth';
import wallet from 'assets/wallet.svg';

const Nft: FC = () => {
  const { nft: allNft, myNft, onGetNft } = useNft();
  const { user } = useAuth();
  const { onGetUser } = useUsers();

  const [owner, setOwner] = useState<IUser | null>(null);
  const [creator, setCreator] = useState<IUser | null>(null);
  const [nftFromCreator, setNftFromCreator] = useState<INft[]>([]);

  const id = useParams()?.id;

  const nft = useMemo(
    () => allNft.find((item) => item.id === +(id ?? -1)),
    [id, allNft]
  );

  const isMyNft = useMemo(
    () => user?.uid === owner?.uid,
    [owner?.uid, user?.uid]
  );

  const onGetCreatorNft = async () => {
    if (nft?.created_by) {
      const ownerId = nft?.owner_ids[nft?.owner_ids.length - 1];

      const response = await onGetNft(nft?.created_by);
      const creatorResponse = await onGetUser(nft?.created_by);
      const ownerResponse = await (ownerId === user?.uid
        ? user
        : onGetUser(ownerId));

      setOwner(ownerResponse);
      setCreator(creatorResponse);
      setNftFromCreator(response);
    }
  };

  useEffect(() => {
    if (isMyNft) {
      setNftFromCreator(myNft);
    } else {
      onGetCreatorNft();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMyNft, myNft]);

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
            className='rounded-xl object-contain min-w-72'
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
          <div className='flex justify-between my-3'>
            <Description.Reverse title='Created by'>
              {creator?.name ?? 'unknown'} {creator?.fullName ?? 'unknown'}
            </Description.Reverse>
            <Description.Reverse title='Owned by' right>
              {owner?.name ?? 'unknown'} {owner?.fullName ?? 'unknown'}
            </Description.Reverse>
          </div>
          <div className='flex justify-between'>
            <Description.Reverse title='Current Bid'>
              <div className='flex gap-2'>
                <Eth />
                <p className='text-xl font-medium'>{nft?.price}</p>
              </div>
            </Description.Reverse>
            <Description.Reverse title='End in' right>
              <p className='text-xl font-medium'>
                {dateHelper.getDate(nft.end_at)}
              </p>
            </Description.Reverse>
          </div>
          <br />
          <br />
          {isMyNft ? (
            <Button className='flex gap-2 w-full justify-center'>
              Your NFT
            </Button>
          ) : (
            <Button className='flex gap-2 w-full justify-center'>
              <img src={wallet} alt='wallet' />
              <span className='font-bold text-lg'>Place bid</span>
            </Button>
          )}
        </section>
      </Card>
      <br />
      <br />
      <div className='flex gap-4 items-center justify-evenly'>
        {nftFromCreator.map((item) => (
          <SmallNFT nft={item} key={item.id} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <p>Не найден</p>
      <NavLink to={'../'}>Назад</NavLink>
    </div>
  );
};

export default memo(Nft);

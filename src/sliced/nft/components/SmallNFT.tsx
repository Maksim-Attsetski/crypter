import React, { FC, memo, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, Card } from 'features/ui';
import { dateHelper } from 'features/helpers';
import { sbStorageUrl } from 'features/supabase';
import { navLinksData } from 'features/data';
import { INft } from '../types';
import { IUser, useUsers } from 'sliced/user';

import BuyNftModal from './BuyNftModal';

import Eth from 'assets/Eth';
import { useAuth } from 'sliced/auth';

interface IProps {
  nft: INft;
}

const SmallNFT: FC<IProps> = ({ nft }) => {
  const { onGetUserList } = useUsers();
  const { user } = useAuth();
  const navigation = useNavigate();

  const [owners, setOwners] = useState<IUser[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClickOnNft = () => {
    navigation(navLinksData.discover + '/' + nft.id);
  };

  const remainedDate = useMemo(
    () => dateHelper.getUntil(nft.end_at),
    [nft.end_at]
  );

  const onClickPlaceBid = async () => {
    setIsVisible(true);
    if (nft?.owner_ids && nft?.owner_ids?.length !== owners.length) {
      const res = await onGetUserList(nft?.owner_ids);
      setOwners(res);
    }
  };

  return (
    <>
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
              <Eth />
              {nft.price}
            </p>
          </div>
          {owners[owners.length - 1]?.uid === user?.uid ? (
            <Button>Your NFT</Button>
          ) : (
            <Button
              disabled={remainedDate === 'Expired'}
              onClick={onClickPlaceBid}
            >
              PLACE BID
            </Button>
          )}
        </div>
      </Card>
      <BuyNftModal
        nft={nft}
        owners={owners}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
};

export default memo(SmallNFT);

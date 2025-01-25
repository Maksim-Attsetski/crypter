import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import { Button, Card, Modal } from 'features/ui';

import { INft } from '../types';
import { IUser } from 'sliced/user';
import { dateHelper } from 'features/helpers';

import walletImg from 'assets/wallet.svg';
import Eth from 'assets/Eth';
import { useWallet } from 'sliced/wallet';
import { useNft } from '../useNft';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  nft: INft;
  owners: IUser[];
}

const BuyNftModal: FC<IProps> = ({ nft, owners, ...props }) => {
  const { wallet, onUpdateWallet } = useWallet();
  const { onUpdateNft } = useNft();

  const [ethValue, setEthValue] = useState('0');

  const isValueValid = useMemo(() => Number.isInteger(+ethValue), [ethValue]);
  const isEnoughMoney = useMemo(
    () => (wallet?.eth_amount ?? 0) - +ethValue >= 0,
    [ethValue, wallet?.eth_amount]
  );

  const onClickSubmit = async () => {
    if (wallet) {
      await onUpdateNft({
        id: nft.id,
        bids: [
          ...nft.bids,
          {
            placed_at: Date.now(),
            price: +ethValue,
            user_uid: wallet?.user_uid,
          },
        ],
      } as INft);
      await onUpdateWallet({
        ...wallet,
        eth_amount: wallet?.eth_amount - +ethValue,
      });
    }
  };

  return (
    <>
      <Modal {...props}>
        <h2 className='text-3xl'>History of Bid</h2>
        <p className='text-textGrey my-1'>
          {dateHelper.getDate(undefined, false)}
        </p>
        <p className='mb-2 flex gap-1 items-center'>
          <span>Your balance: {wallet?.eth_amount ?? 0}</span>
          <Eth />
        </p>
        <div>
          <h2>Previous Owners:</h2>
          <div>
            {owners.map((owner) => (
              <Card smallShadow className='!w-full mb-2'>
                <p className='font-semibold text-xl' key={owner.uid}>
                  {owner.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <p className='text-xl mt-3 mb-1 font-semibold'>Your Bid</p>
        <div>
          <div className='flex border-dark border-solid border-[1px] rounded-xl overflow-hidden'>
            <div className='bg-dark p-3'>
              <img src={walletImg} alt='wallet' />
            </div>
            <input
              value={ethValue}
              onChange={(e) => setEthValue(e.target.value)}
              type='number'
              maxLength={7}
              className={'bg-white py-2 px-3'}
            />
          </div>
          {(!isValueValid || +ethValue === 0) && (
            <p className='text-red-500'>
              Input{+ethValue === 0 ? '' : ' valid'} value
            </p>
          )}
          {!isEnoughMoney && (
            <p className='text-red-500'>You haven't enough Eth</p>
          )}
        </div>
        <br />
        <Button
          className='w-full flex justify-between'
          disabled={!isValueValid || +ethValue === 0 || !isEnoughMoney}
          onClick={onClickSubmit}
        >
          <span>Submit</span>
          <span className='flex gap-2 items-center'>
            {ethValue}
            <Eth fill='#fff' />
          </span>
        </Button>
      </Modal>
    </>
  );
};

export default memo(BuyNftModal);

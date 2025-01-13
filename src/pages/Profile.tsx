import React, { FC, memo } from 'react';

import { LogoutBtn, useAuth } from 'sliced/auth';
import { useWallet } from 'sliced/wallet';

import userBg1 from 'assets/user_bg_1.png';
import userAvatar from 'assets/user_avatar.png';
import { Button } from 'features/ui';

const Profile: FC = () => {
  const { user } = useAuth();
  const { wallet } = useWallet();

  return user && wallet ? (
    <div className='container'>
      <div className='relative'>
        <img src={userBg1} alt='userBg1' className='rounded-xl' />
        <img
          src={userAvatar}
          alt='userAvatar'
          className='rounded-full w-28 h-28 absolute left-[10%] -bottom-14 border-white border-4 border-solid'
        />
      </div>
      <br />
      <article className='flex gap-2'>
        <section className='flex-1'>
          <br />
          <br />
          <div className='flex justify-between gap-2'>
            <h2 className='text-3xl font-semibold'>
              {user?.name} {user?.fullName}
            </h2>
            <Button>Follow +</Button>
          </div>
          <p
            onClick={() => navigator.clipboard.writeText(user?.public_uid)}
            className='text-sm text-textGrey'
          >
            @{user?.public_uid}
          </p>
        </section>
        <section className='flex-1'>
          <h2>Wallet ID: {wallet.id}</h2>
          <h2>Eth amount: {wallet.eth_amount}</h2>
        </section>
      </article>

      <br />
      <LogoutBtn />
    </div>
  ) : (
    <div>
      <p>Empty</p>
    </div>
  );
};

export default memo(Profile);

import React, { FC, memo } from 'react';

import { LogoutBtn, useAuth } from 'sliced/auth';
import { useWallet } from 'sliced/wallet';

const Profile: FC = () => {
  const { user } = useAuth();
  const { wallet } = useWallet();

  return user && wallet ? (
    <div className='container'>
      <h2>
        {user?.name} {user?.fullName}
      </h2>
      <h2>Wallet ID: {wallet.id}</h2>
      <h2>Eth amount: {wallet.eth_amount}</h2>
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

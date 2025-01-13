import React, { FC, memo } from 'react';

import { Button } from 'features/ui';
import { useNavigate } from 'react-router';
import { navLinksData } from 'features/data';
import { useWallet } from 'sliced/wallet';

const ConnectWalletBtn: FC = () => {
  const navigate = useNavigate();
  const { wallet } = useWallet();

  const onClickOnWallet = () => {
    navigate(wallet ? navLinksData.profile : navLinksData.auth);
  };

  return (
    <Button onClick={onClickOnWallet}>
      {wallet ? 'MY' : 'CONNECT'} WALLET
    </Button>
  );
};

export default memo(ConnectWalletBtn);

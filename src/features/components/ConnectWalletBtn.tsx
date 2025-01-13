import React, { FC, memo } from 'react';

import { Button } from 'features/ui';
import { useNavigate } from 'react-router';
import { navLinksData } from 'features/data';

const ConnectWalletBtn: FC = () => {
  const navigate = useNavigate();

  const onClickConnectWallet = () => {
    navigate(navLinksData.auth);
  };

  return <Button onClick={onClickConnectWallet}>CONNECT WALLET</Button>;
};

export default memo(ConnectWalletBtn);

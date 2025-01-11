import React, { FC, memo } from 'react';

import { Button } from 'features/ui';

const ConnectWalletBtn: FC = () => {
  const onClickConnectWallet = () => {};

  return <Button onClick={onClickConnectWallet}>CONNECT WALLET</Button>;
};

export default memo(ConnectWalletBtn);

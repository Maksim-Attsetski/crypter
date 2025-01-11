import React, { FC, memo } from 'react';

import { Button } from 'features/ui';

const ConnectWalletBtn: FC = () => {
  const onClickConnectWallet = () => {};

  return <Button onClick={onClickConnectWallet}>Connect wallet</Button>;
};

export default memo(ConnectWalletBtn);

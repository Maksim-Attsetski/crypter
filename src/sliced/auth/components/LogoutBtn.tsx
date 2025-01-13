import React, { FC, memo } from 'react';

import { useWallet } from 'sliced/wallet';
import { Button } from 'features/ui';

import { useAuth } from '../useAuth';

const LogoutBtn: FC = () => {
  const { onSignOut } = useAuth();
  const { onClearWallet } = useWallet();

  const onClickLogout = async () => {
    await onSignOut();
    onClearWallet();
  };

  return <Button onClick={onClickLogout}>Logout</Button>;
};

export default memo(LogoutBtn);

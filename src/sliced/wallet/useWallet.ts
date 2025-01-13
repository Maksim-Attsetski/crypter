import { Service } from 'features/service';

import { useAuth } from 'sliced/auth';

import { IWallet } from './types';
import { useAuthState } from './state';

const walletService = new Service('wallets');

export const useWallet = () => {
  const { wallet, setWallet } = useAuthState();
  const { user } = useAuth();

  const onCreateWallet = async (user_id: number) => {
    const newWallet = {
      activity: [],
      collection: [],
      eth_amount: 0,
      user_uid: user_id,
    } as unknown as IWallet;

    const result = await walletService.create<IWallet>(newWallet);

    if (result.data?.[0]?.id) {
      setWallet(result.data?.[0]);
    }
  };

  const onUpdateWallet = async (data: IWallet) => {
    await walletService.update<IWallet>(data?.id + '', data);
    setWallet(data);
  };

  const onGetMyWallet = async (id?: string) => {
    if (id || user?.uid) {
      const result = await walletService.getBy<IWallet>(
        id ?? (user?.uid as string),
        'user_uid'
      );

      if (result.data?.[0]?.id) {
        setWallet(result.data?.[0]);
      }
    }
  };

  const onClearWallet = () => {
    setWallet(null);
  };

  return {
    wallet,
    onClearWallet,
    onGetMyWallet,
    onUpdateWallet,
    onCreateWallet,
  };
};

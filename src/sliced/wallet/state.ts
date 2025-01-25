import { IWallet } from './types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IState {
  wallet: IWallet | null;
  setWallet: (data: IWallet | null) => void;
}

export const useWalletState = create(
  persist<IState>(
    (use) => ({
      wallet: null,
      setWallet: (data: IWallet | null) =>
        use((state) => ({
          ...state,
          wallet: state?.wallet && data ? { ...state.wallet, ...data } : data,
        })),
    }),
    {
      name: 'wallet',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

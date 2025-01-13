import { create } from 'zustand';
import { IWallet } from './types';

interface IState {
  wallet: IWallet | null;
  setWallet: (data: IWallet | null) => void;
}

export const useAuthState = create<IState>((use) => ({
  wallet: null,
  setWallet: (data: IWallet | null) =>
    use((state) => ({
      ...state,
      wallet: state?.wallet && data ? { ...state.wallet, ...data } : data,
    })),
}));

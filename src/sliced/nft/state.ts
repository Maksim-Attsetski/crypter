import { create } from 'zustand';
import { INft } from './types';

interface IState {
  nft: INft[];
  myNft: INft[];
  setNft: (newNft: INft[]) => void;
  setMyNft: (newMyNft: INft[]) => void;
}

export const useNftState = create<IState>((use) => ({
  nft: [],
  myNft: [],
  setNft: (newNft) => use((state) => ({ ...state, nft: newNft })),
  setMyNft: (newNft) => use((state) => ({ ...state, myNft: newNft })),
}));

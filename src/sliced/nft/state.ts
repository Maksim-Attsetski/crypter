import { create } from 'zustand';

interface IState {
  nft: any[];
  myNft: any[];
  setNft: (newNft: any[]) => void;
  setMyNft: (newMyNft: any[]) => void;
}

export const useNftState = create<IState>((use) => ({
  nft: [],
  myNft: [],
  setNft: (newNft) => use((state) => ({ ...state, nft: newNft })),
  setMyNft: (newNft) => use((state) => ({ ...state, myNft: newNft })),
}));

import { create } from 'zustand';
import { INft } from './types';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IState {
  nft: INft[];
  myNft: INft[];
  setNft: (newNft: INft[]) => void;
  setMyNft: (newMyNft: INft[]) => void;
}

export const useNftState = create(
  persist<IState>(
    (use) => ({
      nft: [],
      myNft: [],
      setNft: (newNft) => use((state) => ({ ...state, nft: newNft })),
      setMyNft: (newNft) => use((state) => ({ ...state, myNft: newNft })),
    }),
    {
      name: 'nft',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

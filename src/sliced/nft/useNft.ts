import { Service } from 'features/service';
import { useNftState } from './state';
import { INft } from './types';

const nftService = new Service('nft');

export const useNft = () => {
  const { myNft, nft, setMyNft, setNft } = useNftState();

  const onGetAllNft = async () => {
    const myNftData = await nftService.getBy<INft>('1', 'created_by');
    const nftData = await nftService.getAll<INft>();

    if (nftData.data) {
      setNft(nftData.data);
    }
    if (myNftData.data) {
      setMyNft(myNftData.data);
    }
  };

  return { nft, myNft, onGetAllNft };
};

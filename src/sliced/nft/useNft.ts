import { Service } from 'features/service';
import { useNftState } from './state';
import { INft } from './types';

const nftService = new Service('nft');

export const useNft = () => {
  const { myNft, nft, setMyNft, setNft } = useNftState();

  const onGetMyNft = async (user_id?: string) => {
    if (user_id) {
      const myNftData = await nftService.getBy<INft>(user_id, 'created_by');

      if (myNftData.data) {
        setMyNft(myNftData.data);
      }
    }
  };

  const onGetAllNft = async (user_id?: string) => {
    const nftData = await nftService.getAll<INft>();

    if (nftData.data) {
      setNft(nftData.data);
    }

    await onGetMyNft(user_id);
  };

  return { nft, myNft, onGetAllNft };
};

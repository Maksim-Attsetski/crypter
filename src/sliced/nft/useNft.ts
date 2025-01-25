import { Service } from 'features/service';
import { useNftState } from './state';
import { INft } from './types';

const nftService = new Service('nft');

export const useNft = () => {
  const { myNft, nft, setMyNft, setNft } = useNftState();

  const onGetNft = async (user_id?: string): Promise<INft[]> => {
    let nftData;

    if (user_id) {
      nftData = await nftService.getBy<INft>(user_id, 'created_by');
    } else {
      nftData = await nftService.getAll<INft>();
    }

    if (nftData.error) {
      throw new Error(nftData?.error?.message);
    }

    return nftData.data ?? [];
  };

  const onGetMyNft = async (user_id?: string) => {
    if (user_id) {
      const myNftData = await onGetNft(user_id);
      setMyNft(myNftData);
    }
  };

  const onGetAllNft = async (user_id?: string) => {
    const nftData = await onGetNft();

    setNft(nftData);
    await onGetMyNft(user_id);
  };

  return { nft, myNft, onGetAllNft, onGetNft };
};

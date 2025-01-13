import React, { FC, memo, useMemo } from 'react';

import { useNft } from '../useNft';
import SmallNFT from './SmallNFT';

const TopNftList: FC = () => {
  const { nft } = useNft();

  const topNfts = useMemo(
    () => [...nft].sort((a, b) => a.price - b.price).slice(0, 9),
    [nft]
  );

  return (
    <>
      {topNfts.map((item) => (
        <SmallNFT nft={item} key={item.id} />
      ))}
    </>
  );
};

export default memo(TopNftList);

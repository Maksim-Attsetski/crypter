import React, { FC, memo, useMemo } from 'react';

import { useNft } from '../useNft';
import SmallNFT from './SmallNFT';

const TopNftList: FC = () => {
  const { nft } = useNft();

  const topNfts = useMemo(
    () => [...nft].sort((a, b) => a.price - b.price).slice(0, 8),
    [nft]
  );

  return (
    <section className='flex gap-3 flex-wrap'>
      {topNfts.map((item) => (
        <SmallNFT nft={item} key={item.id} />
      ))}
    </section>
  );
};

export default memo(TopNftList);

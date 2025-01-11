import React, { FC, memo, useEffect } from 'react';
import { SmallNFT, useNft } from 'sliced';

const Discover: FC = () => {
  const { onGetAllNft, nft } = useNft();

  useEffect(() => {
    onGetAllNft();
  }, []);

  return (
    <div>
      <div>{JSON.stringify(nft)}</div>

      <div className='container'>
        {nft.map((item) => (
          <SmallNFT key={item.id} nft={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(Discover);

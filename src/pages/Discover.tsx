import React, { FC, memo, useEffect } from 'react';
import { NftListWithFilters, useNft } from 'sliced';

const Discover: FC = () => {
  const { onGetAllNft } = useNft();

  useEffect(() => {
    onGetAllNft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <br />
      <h3 className='text-4xl text-center'>Discover NFTs</h3>
      <br />

      <div className='container'>
        <NftListWithFilters />
      </div>
    </div>
  );
};

export default memo(Discover);

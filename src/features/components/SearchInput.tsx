import React, { Dispatch, FC, memo, SetStateAction, useState } from 'react';

import searchSvg from 'assets/search.svg';
import { Input } from 'features/ui';

const SearchInput: FC = () => {
  const [searchValue, sestSearchValue] = useState<string>('');

  return (
    <div className='bg-[#EDEDED] rounded-xl py-2 px-3 flex gap-3'>
      <img src={searchSvg} alt='search' />
      <Input
        placeHolder='Search Art Work / Creator'
        value={searchValue}
        setValue={sestSearchValue}
      />
    </div>
  );
};

export default memo(SearchInput);

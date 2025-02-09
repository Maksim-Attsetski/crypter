import React, { FC, memo, useState } from 'react';

import { Input } from 'features/ui';
import { useDebounce } from 'features/hooks';

import searchSvg from 'assets/search.svg';

const SearchInput: FC = () => {
  const [searchValue, sestSearchValue] = useState<string>('');
  const query = useDebounce(searchValue);

  console.log(query);

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

import React, { Dispatch, FC, memo, SetStateAction } from 'react';

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeHolder?: string;
}

const Input: FC<IProps> = ({ value, setValue, placeHolder }) => {
  return (
    <input
      className='min-w-[180px] bg-[#EDEDED] rounded-2xl placeholder:text-[#C2C3CB]'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeHolder}
    />
  );
};

export default memo(Input);

import React, { FC, memo, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  onClick: () => void;
}

const Button: FC<IProps> = ({ onClick, children }) => {
  return (
    <button
      className='bg-[#141416] text-white uppercase rounded-xl py-2 px-4'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);

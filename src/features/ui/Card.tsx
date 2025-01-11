import React, { FC, memo, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const Card: FC<IProps> = ({ children, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={
        'w-max bg-white p-4 rounded-2xl shadow-xl shadow-[#c7c7c7c3] ' +
        className
      }
    >
      {children}
    </div>
  );
};

export default memo(Card);

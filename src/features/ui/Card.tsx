import React, { FC, memo, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  smallShadow?: boolean;
}

const Card: FC<IProps> = ({
  children,
  onClick,
  className = '',
  smallShadow = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-max bg-white shadow-[#c7c7c7c3] transition-all p-4 rounded-2xl ${
        smallShadow ? 'shadow-sm hover:shadow-xl' : 'shadow-xl'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default memo(Card);

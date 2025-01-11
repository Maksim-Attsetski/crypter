import React, { FC, memo, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

interface IProps extends PropsWithChildren {
  onClick?: () => void;
  to?: string;
  outlined?: boolean;
  className?: string;
}

const cls = {
  outlined: 'bg-white text-[#141416]',
  filled: 'bg-[#141416] text-white',
};

const Button: FC<IProps> = ({
  onClick,
  children,
  outlined = false,
  to,
  className = '',
}) => {
  const nav = useNavigate();

  const onBtnClick = () => {
    if (to) {
      nav(to);
      return;
    }
    onClick?.();
  };

  return (
    <button
      className={`${
        cls[outlined ? 'outlined' : 'filled']
      } ${className} border-[#141416] border-solid border-2 rounded-xl py-2 px-4`}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);

import { motion } from 'framer-motion';
import React, { FC, memo, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';

interface IProps extends PropsWithChildren {
  onClick?: () => void;
  to?: string;
  outlined?: boolean;
  className?: string;
}

const cls = {
  outlined: 'bg-white text-dark',
  filled: 'bg-dark text-white',
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
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`${
        cls[outlined ? 'outlined' : 'filled']
      } ${className} border-dark border-solid border-2 rounded-xl py-2 px-4`}
      onClick={onBtnClick}
    >
      {children}
    </motion.button>
  );
};

export default memo(Button);

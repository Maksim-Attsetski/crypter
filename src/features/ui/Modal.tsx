import { motion } from 'framer-motion';
import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  PropsWithChildren,
  useEffect,
} from 'react';

interface IProps extends PropsWithChildren {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const init = { opacity: 0, scale: 0 };

const Modal: FC<IProps> = ({ isVisible, setIsVisible, children }) => {
  useEffect(() => {
    document.body.classList?.[isVisible ? 'add' : 'remove']('overflow-hidden');
  }, [isVisible]);

  return (
    <>
      <motion.div
        className='backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0'
        onClick={() => setIsVisible(false)}
        animate={isVisible ? { opacity: 1, scale: 1 } : init}
        initial={init}
        exit={init}
      ></motion.div>
      <motion.div
        animate={
          isVisible
            ? { opacity: 1, y: '-50%', x: '-50%', scale: 1 }
            : { opacity: 0, y: '-70%', x: '-50%', scale: 0 }
        }
        initial={{ opacity: 0, y: '-30%', x: '-50%', scale: 0 }}
        exit={{ opacity: 0, y: '-70%', x: '-50%', scale: 0 }}
        transition={{ type: 'spring', stiffness: 70 }}
        className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white py-4 px-6 rounded-xl
            `}
      >
        {children}
      </motion.div>
    </>
  );
};

export default memo(Modal);

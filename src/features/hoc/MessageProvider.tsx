import React, { FC, memo, PropsWithChildren } from 'react';

import successMark from 'assets/success_mark.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useMessage } from 'features/hooks';

const MessageProvider: FC<PropsWithChildren> = ({ children }) => {
  const { messages } = useMessage();

  return (
    <div className='relative'>
      <AnimatePresence>
        {messages.map((item, inx) => {
          const y = 50 * (inx + 1);

          return (
            <motion.div
              key={item.id}
              initial={{ x: 100, opacity: 0, y }}
              animate={{ x: 0, opacity: 1, y }}
              exit={{ x: 100, opacity: 0 }}
              className={`
            absolute top-[5%] right-[5%] z-50
            bg-white shadow-xl shadow-[#0000003c]
            px-4 py-2 rounded-3xl
            text-xl
            flex gap-2
          `}
            >
              <img src={successMark} className='w-5' alt='successMark' />
              {item.text}
            </motion.div>
          );
        })}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default memo(MessageProvider);

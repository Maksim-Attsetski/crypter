import { motion } from 'framer-motion';
import React, {
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
  memo,
  SetStateAction,
  useState,
} from 'react';

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeHolder?: string;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<IProps> = ({ value, setValue, placeHolder, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='relative w-full'>
      <input
        className='min-w-[180px] w-full px-3 py-2 bg-[#EDEDED] rounded-2xl placeholder:text-[#C2C3CB]'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        type={isVisible ? 'text' : type}
      />
      {type === 'password' && (
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className='cursor-pointer absolute top-2 right-2'
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? '👀' : '🙈'}
        </motion.div>
      )}
    </div>
  );
};

export default memo(Input);

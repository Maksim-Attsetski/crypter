import React, { FC, memo } from 'react';

interface IProps {
  fill?: string;
  size?: number;
}

const Eth: FC<IProps> = ({ fill = '#141416', size = 19 }) => {
  return (
    <svg
      width={size * 0.7}
      height={size}
      viewBox={`0 0 ${size * 0.7} ${size}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.50104 0.652588L0.969727 9.94519L6.50104 13.264L12.0323 9.94519L6.50104 0.652588ZM0.969727 11.0514L6.50104 18.7953L12.0323 11.0514L6.50104 14.3702L0.969727 11.0514Z'
        fill={fill}
      />
    </svg>
  );
};

export default memo(Eth);

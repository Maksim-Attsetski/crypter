import React, { FC, memo, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  title: string;
}

const DescriptionComp: FC<IProps> = memo(({ title, children }) => {
  return (
    <div>
      <p className='text-3xl text-center font-semibold'>{title}</p>
      <p className='text-textGrey text-xs'>{children}</p>
    </div>
  );
});

const DescriptionGroup: FC<{ options: IProps[] }> = memo(({ options }) => {
  return (
    <div className='flex gap-7'>
      {options.map((option) => (
        <DescriptionComp {...option} key={option.title} />
      ))}
    </div>
  );
});

export const Description = {
  Item: DescriptionComp,
  Group: DescriptionGroup,
};
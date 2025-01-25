import React, { FC, memo } from 'react';

const About: FC = () => {
  return (
    <div className='container'>
      <h1 className='font-semibold text-3xl'>Something about me</h1>
      <div>
        I always try to do my best to show the best result. That&apos;s why
        i&apos;m not afraid to learn something new every day. I can also work
        with both in a team of independently. Have good time management skills.
      </div>
      <div className='mb-3 font-bold text-2xl mt-5'>My hobbies</div>
      <div>
        Usually, i like to cook something tasty and do usefull exercises. Also,
        before go bed, i love to play games or watch movies (fantasy, actions,
        anime and etc...)
      </div>
    </div>
  );
};

export default memo(About);

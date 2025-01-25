import React, { FC, memo } from 'react';

const Contacts: FC = () => {
  return (
    <div className='container'>
      <h1 className='font-semibold text-3xl'>Contacts</h1>

      <br />
      <p>My Github ↓</p>
      <a href='https://github.com/Maksim-Attsetski/'>Maksim-Attsetski</a>
    </div>
  );
};

export default memo(Contacts);

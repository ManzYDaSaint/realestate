import React from 'react';

const Para = ({ children }) => {
  return (
    <p className='block text-center my-3 text-gray-700 text-sm'>
      {children}
    </p>
  );
};

export default Para;

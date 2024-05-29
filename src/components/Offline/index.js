import React from 'react';

const Offline = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 className='font-bold text-5xl'>Offline</h1>
      <p>Your internet connection seems to be offline. Please check your network settings and try again.</p>
    </div>
  );
};

export default Offline;
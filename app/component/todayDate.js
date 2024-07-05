'use client'
import { useEffect, useState } from 'react';

const Today = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div className='Date_Area'>
      <p>{currentDate}</p>
    </div>
  );
};

export default Today;
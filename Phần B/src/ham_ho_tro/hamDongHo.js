import { useState, useEffect } from 'react';

export const hamDongHo = () => {
  const [thoiGian, setThoiGian] = useState(new Date());
  
  useEffect(() => {
    const demNhip = setInterval(() => setThoiGian(new Date()), 1000);
    return () => clearInterval(demNhip);
  }, []);
  
  return thoiGian;
};
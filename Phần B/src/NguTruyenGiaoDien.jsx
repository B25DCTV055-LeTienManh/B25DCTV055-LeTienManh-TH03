import React, { createContext, useState } from 'react';

export const NguTruyenGiaoDien = createContext();

export const CungCapGiaoDien = ({ children }) => {
  const [chuDe, setChuDe] = useState('sang');
  const doiChuDe = () => setChuDe(chuDe === 'sang' ? 'toi' : 'sang');

  return (
    <NguTruyenGiaoDien.Provider value={{ chuDe, doiChuDe }}>
      <div className={chuDe}>
        {children}
      </div>
    </NguTruyenGiaoDien.Provider>
  );
};
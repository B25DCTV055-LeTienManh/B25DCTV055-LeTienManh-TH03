import React, { useContext } from 'react';
import { hamDongHo } from '../ham_ho_tro/hamDongHo';
import { NguTruyenGiaoDien } from '../NguTruyenGiaoDien';

export default function ThanhTieuDe() {
  const thoiGian = hamDongHo();
  const { chuDe, doiChuDe } = useContext(NguTruyenGiaoDien);

  return (
    <header>
      <div>
        <h2>Sổ Chi Tiêu (Phần B)</h2>
        <button onClick={doiChuDe}>Giao diện: {chuDe === 'sang' ? 'Tối' : 'Sáng'}</button>
      </div>
      <h3>{thoiGian.toLocaleTimeString()}</h3>
    </header>
  );
}
import React, { useState, useRef } from 'react';

export default function BieuMauThem({ themDuLieu, dangTai }) {
  const [noiDung, setNoiDung] = useState('');
  const [soTien, setSoTien] = useState('');
  const [phanLoai, setPhanLoai] = useState('Ăn uống');
  const [ngayChi, setNgayChi] = useState('');
  const [loi, setLoi] = useState('');
  const oNhapRef = useRef(null);

  const xuLyGui = async (e) => {
    e.preventDefault();
    if (!noiDung || !soTien || !ngayChi) {
      setLoi('Chưa nhập đủ thông tin!');
      return;
    }
    if (Number(soTien) <= 0) {
      setLoi('Tiền phải lớn hơn 0!');
      return;
    }
    
    await themDuLieu({ noiDung, soTien: Number(soTien), phanLoai, ngayChi });
    setNoiDung('');
    setSoTien('');
    setPhanLoai('Ăn uống');
    setNgayChi('');
    setLoi('');
    if (oNhapRef.current) oNhapRef.current.focus();
  };

  return (
    <div>
      {loi && <p className="loi">{loi}</p>}
      <form className="nhom-nhap" onSubmit={xuLyGui}>
        <input ref={oNhapRef} type="text" placeholder="Mua gì..." value={noiDung} onChange={e => setNoiDung(e.target.value)} />
        <input type="number" placeholder="Giá tiền..." value={soTien} onChange={e => setSoTien(e.target.value)} />
        <select value={phanLoai} onChange={e => setPhanLoai(e.target.value)}>
          <option value="Ăn uống">Ăn uống</option>
          <option value="Đi lại">Đi lại</option>
          <option value="Học tập">Học tập</option>
          <option value="Giải trí">Giải trí</option>
        </select>
        <input type="date" value={ngayChi} onChange={e => setNgayChi(e.target.value)} />
        <button type="submit" disabled={dangTai}>Thêm vào sổ</button>
      </form>
    </div>
  );
}
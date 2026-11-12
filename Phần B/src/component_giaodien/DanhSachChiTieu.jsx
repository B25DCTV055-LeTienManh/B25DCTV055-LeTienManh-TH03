import React from 'react';

export default function DanhSachChiTieu({ danhSach, xoaDuLieu }) {
  return (
    <div>
      {danhSach.map(muc => (
        <div key={muc.id} className="muc-chi-tieu">
          <div>
            <strong>{muc.noiDung}</strong> ({muc.phanLoai}) <br/>
            <small>{muc.ngayChi}</small>
          </div>
          <div>
            <span style={{ marginRight: '15px' }}>{Number(muc.soTien).toLocaleString()} đ</span>
            <button className="nut-xoa" onClick={() => xoaDuLieu(muc.id)}>Xóa</button>
          </div>
        </div>
      ))}
    </div>
  );
}
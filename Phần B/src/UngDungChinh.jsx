import React, { useState, useEffect } from 'react';
import './GiaoDien.css';
import { hamGoiAPI } from './ham_ho_tro/hamGoiAPI';
import { CungCapGiaoDien } from './NguTruyenGiaoDien';
import ThanhTieuDe from './component_giaodien/ThanhTieuDe';
import BieuMauThem from './component_giaodien/BieuMauThem';
import DanhSachChiTieu from './component_giaodien/DanhSachChiTieu';

const DUONG_DAN_API = 'https://6ad10cd3addc5b5cb142ac84.mockapi.io/books'; 

function KhoiChayUngDung() {
  const { duLieu, dangTai, loi, taoMoi, xoa } = hamGoiAPI(DUONG_DAN_API);
  
  const [loaiCanLoc, setLoaiCanLoc] = useState('Tất cả');
  const [tuKhoa, setTuKhoa] = useState('');
  const [tuKhoaCoDoTre, setTuKhoaCoDoTre] = useState('');

  useEffect(() => {
    const demNhip = setTimeout(() => setTuKhoaCoDoTre(tuKhoa), 500);
    return () => clearTimeout(demNhip);
  }, [tuKhoa]);

  const xuLyXoa = (id) => {
    if (window.confirm('Chắc chắn xóa khoản này?')) xoa(id);
  };

  const danhSachDaLoc = duLieu.filter(muc => {
    const dungLoai = loaiCanLoc === 'Tất cả' || muc.phanLoai === loaiCanLoc;
    const tenMuc = muc.noiDung || muc.name || '';
    const dungTuKhoa = tenMuc.toLowerCase().includes(tuKhoaCoDoTre.toLowerCase());
    return dungLoai && dungTuKhoa;
  });

  const tongTien = danhSachDaLoc.reduce((tong, muc) => tong + Number(muc.soTien || 0), 0);
  
  const bangThongKe = duLieu.reduce((tichLuy, muc) => {
    const loai = muc.phanLoai || 'Khác';
    tichLuy[loai] = (tichLuy[loai] || 0) + Number(muc.soTien || 0);
    return tichLuy;
  }, {});

  return (
    <div className="khung-chua">
      <ThanhTieuDe />
      
      {loi && <p className="loi">Lỗi máy chủ: {loi}</p>}
      
      <BieuMauThem themDuLieu={taoMoi} dangTai={dangTai} />

      <div className="nhom-nhap">
        <input type="text" placeholder="Tìm theo tên..." value={tuKhoa} onChange={e => setTuKhoa(e.target.value)} />
        <select value={loaiCanLoc} onChange={e => setLoaiCanLoc(e.target.value)}>
          <option value="Tất cả">Tất cả loại</option>
          <option value="Ăn uống">Ăn uống</option>
          <option value="Đi lại">Đi lại</option>
          <option value="Học tập">Học tập</option>
          <option value="Giải trí">Giải trí</option>
        </select>
      </div>

      {dangTai ? <p>Đang tải dữ liệu từ máy chủ...</p> : <DanhSachChiTieu danhSach={danhSachDaLoc} xoaDuLieu={xuLyXoa} />}

      <h3 className="tong-tien">Tổng cộng: {tongTien.toLocaleString()} đ</h3>
      
      <div className="thong-ke">
        <strong>Thống kê các loại: </strong>
        {Object.entries(bangThongKe).map(([tenLoai, tongTienLoai]) => (
          <span key={tenLoai} style={{marginLeft: '15px'}}>{tenLoai}: {tongTienLoai.toLocaleString()} đ</span>
        ))}
      </div>
    </div>
  );
}

export default function UngDungChinh() {
  return (
    <CungCapGiaoDien>
      <KhoiChayUngDung />
    </CungCapGiaoDien>
  );
}
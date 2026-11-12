import React, { Component } from 'react';
import './GiaoDien.css';
import ThanhTieuDe from "./component_giaodien/ThanhTieuDe";
import BieuMauThem from "./component_giaodien/BieuMauThem";
import DanhSachChiTieu from "./component_giaodien/DanhSachChiTieu";

class UngDungChinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSach: [
        { id: 1, noiDung: 'Bánh mì', soTien: 20000, phanLoai: 'Ăn uống', ngayChi: '2026-11-12' },
        { id: 2, noiDung: 'Xăng xe', soTien: 60000, phanLoai: 'Đi lại', ngayChi: '2026-11-12' }
      ],
      loaiCanLoc: 'Tất cả',
      thoiGian: new Date()
    };
  }

  componentDidMount() {
    this.dongHo = setInterval(() => this.setState({ thoiGian: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dongHo);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.danhSach !== this.state.danhSach || prevState.loaiCanLoc !== this.state.loaiCanLoc) {
      const danhSachDaLoc = this.state.loaiCanLoc === 'Tất cả' 
        ? this.state.danhSach 
        : this.state.danhSach.filter(muc => muc.phanLoai === this.state.loaiCanLoc);
      
      const tongTien = danhSachDaLoc.reduce((tong, muc) => tong + Number(muc.soTien), 0);
      document.title = `Tổng chi: ${tongTien.toLocaleString()} đ`;
    }
  }

  themKhoanChi = (khoanMoi) => {
    this.setState({ danhSach: [...this.state.danhSach, { id: Date.now(), ...khoanMoi }] });
  }

  xoaKhoanChi = (idCanXoa) => {
    if (window.confirm('Chắc chắn xóa?')) {
      this.setState({ danhSach: this.state.danhSach.filter(muc => muc.id !== idCanXoa) });
    }
  }

  render() {
    const danhSachDaLoc = this.state.loaiCanLoc === 'Tất cả' 
      ? this.state.danhSach 
      : this.state.danhSach.filter(muc => muc.phanLoai === this.state.loaiCanLoc);
    
    const tongTien = danhSachDaLoc.reduce((tong, muc) => tong + Number(muc.soTien), 0);

    return (
      <div className="sang">
        <div className="khung-chua">
          <ThanhTieuDe thoiGian={this.state.thoiGian} />
          
          <BieuMauThem themDuLieu={this.themKhoanChi} />
          
          <div className="nhom-nhap">
            <label>Lọc theo loại: </label>
            <select value={this.state.loaiCanLoc} onChange={(e) => this.setState({ loaiCanLoc: e.target.value })}>
              <option value="Tất cả">Tất cả</option>
              <option value="Ăn uống">Ăn uống</option>
              <option value="Đi lại">Đi lại</option>
              <option value="Học tập">Học tập</option>
              <option value="Giải trí">Giải trí</option>
            </select>
          </div>

          <DanhSachChiTieu danhSach={danhSachDaLoc} xoaDuLieu={this.xoaKhoanChi} />
          
          <h3 className="tong-tien">Tổng tiền: {tongTien.toLocaleString()} đ</h3>
        </div>
      </div>
    );
  }
}
export default UngDungChinh;
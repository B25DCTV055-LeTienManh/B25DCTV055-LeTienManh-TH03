import React, { Component } from 'react';

class DanhSachChiTieu extends Component {
  render() {
    return (
      <div>
        {this.props.danhSach.map(muc => (
          <div key={muc.id} className="muc-chi-tieu">
            <div>
              <strong>{muc.noiDung}</strong> ({muc.phanLoai}) <br/>
              <small>{muc.ngayChi}</small>
            </div>
            <div>
              <span style={{ marginRight: '15px' }}>{Number(muc.soTien).toLocaleString()} đ</span>
              <button className="nut-xoa" onClick={() => this.props.xoaDuLieu(muc.id)}>Xóa</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default DanhSachChiTieu;
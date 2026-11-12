import React, { Component } from 'react';

class BieuMauThem extends Component {
  constructor(props) {
    super(props);
    this.state = { noiDung: '', soTien: '', phanLoai: 'Ăn uống', ngayChi: '', thongBaoLoi: '' };
  }

  xuLyThayDoi = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  xuLyGui = (e) => {
    e.preventDefault();
    const { noiDung, soTien, phanLoai, ngayChi } = this.state;
    
    if (!noiDung || !soTien || !ngayChi) {
      this.setState({ thongBaoLoi: 'Chưa nhập đủ thông tin!' });
      return;
    }
    if (soTien <= 0) {
      this.setState({ thongBaoLoi: 'Tiền phải lớn hơn 0!' });
      return;
    }
    
    this.props.themDuLieu({ noiDung, soTien, phanLoai, ngayChi });
    this.setState({ noiDung: '', soTien: '', phanLoai: 'Ăn uống', ngayChi: '', thongBaoLoi: '' });
  }

  render() {
    return (
      <div>
        {this.state.thongBaoLoi && <p className="loi">{this.state.thongBaoLoi}</p>}
        <form className="nhom-nhap" onSubmit={this.xuLyGui}>
          <input type="text" name="noiDung" placeholder="Mua gì..." value={this.state.noiDung} onChange={this.xuLyThayDoi} />
          <input type="number" name="soTien" placeholder="Giá tiền..." value={this.state.soTien} onChange={this.xuLyThayDoi} />
          <select name="phanLoai" value={this.state.phanLoai} onChange={this.xuLyThayDoi}>
            <option value="Ăn uống">Ăn uống</option>
            <option value="Đi lại">Đi lại</option>
            <option value="Học tập">Học tập</option>
            <option value="Giải trí">Giải trí</option>
          </select>
          <input type="date" name="ngayChi" value={this.state.ngayChi} onChange={this.xuLyThayDoi} />
          <button type="submit">Thêm vào sổ</button>
        </form>
      </div>
    );
  }
}
export default BieuMauThem;
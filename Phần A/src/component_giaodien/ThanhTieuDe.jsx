import React, { Component } from 'react';

class ThanhTieuDe extends Component {
  render() {
    return (
      <header>
        <h2>Sổ Chi Tiêu (Phần A)</h2>
        <h3>{this.props.thoiGian.toLocaleTimeString()}</h3>
      </header>
    );
  }
}
export default ThanhTieuDe;
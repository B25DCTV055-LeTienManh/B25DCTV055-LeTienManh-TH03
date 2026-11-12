import { useState, useEffect, useCallback } from 'react';

export const hamGoiAPI = (duongDan) => {
  const [duLieu, setDuLieu] = useState([]);
  const [dangTai, setDangTai] = useState(false);
  const [loi, setLoi] = useState(null);

  const layDuLieuTuMayChu = useCallback(async () => {
    setDangTai(true);
    try {
      const ketQua = await fetch(duongDan);
      const json = await ketQua.json();
      setDuLieu(Array.isArray(json) ? json : []);
    } catch (err) {
      setLoi(err.message);
    }
    setDangTai(false);
  }, [duongDan]);

  useEffect(() => { 
    layDuLieuTuMayChu(); 
  }, [layDuLieuTuMayChu]);

  const taoMoi = async (khoanChi) => {
    try {
      await fetch(duongDan, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(khoanChi)
      });
      layDuLieuTuMayChu(); 
    } catch (err) {
      setLoi(err.message);
    }
  };

  const xoa = async (id) => {
    try {
      await fetch(`${duongDan}/${id}`, { method: 'DELETE' });
      layDuLieuTuMayChu();
    } catch (err) {
      setLoi(err.message);
    }
  };

  return { duLieu, dangTai, loi, taoMoi, xoa };
};
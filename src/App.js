import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider as Ap } from './context/AuthContext';
import { RegisterProvider as Rp } from 'context/RegisterContext';
// User Component
import Home from './components/user/Home.js';
import Presensi from './components/user/Presensi.js'
import DetailPresensi from './components/user/DetailPresensi.js';
import Laporan from './components/user/Laporan.js';
import TambahLaporan from './components/user/TambahLaporan.js';
import DetailLaporan from './components/user/DetailLaporan.js';
import EditLaporan from './components/user/EditLaporan.js';
import Pengaturan from './components/user/Pengaturan.js';
import UserProfile from 'components/user/UserProfile';
// Pembimbing Component
import HomePembimbing from './components/pembimbing/HomePembimbing';
import PresensiPembimbing from 'components/pembimbing/PresensiPembimbing';
import DetailPresensiPembimbing from 'components/pembimbing/DetailPresensiPembimbing';
import LaporanPembimbing from 'components/pembimbing/LaporanPembimbing';
import DetailLaporanPembimbing from 'components/pembimbing/DetailLaporanPembimbing';
// Admin Component
import HomeAdmin from 'components/pembimbing/HomeAdmin';
// Universal Component
import Login from './components/Login.js';
import Register from './components/Register.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ap><Home /></Ap>}></Route>
        <Route path="/presensi" element={<Ap><Presensi /></Ap>}></Route>
        <Route path="/presensi/detail" element={<Ap><DetailPresensi /></Ap>}></Route>
        <Route path="/laporan" element={<Ap><Laporan /></Ap>}></Route>
        <Route path="/laporan/add" element={<Ap><TambahLaporan /></Ap>}></Route>
        <Route path="/laporan/detail/:id" element={<Ap><DetailLaporan /></Ap>}></Route>
        <Route path="/laporan/edit/:id" element={<Ap><EditLaporan /></Ap>}></Route>
        <Route path="/pengaturan" element={<Ap><Pengaturan /></Ap>}></Route>
        <Route path="/profile/:id" element={<Ap><UserProfile /></Ap>}></Route>

        <Route path="/pembimbing" element={<Ap><HomePembimbing /></Ap>}></Route>
        <Route path="/presensi_pembimbing" element={<Ap><PresensiPembimbing /></Ap>}></Route>
        <Route path="/presensi_pembimbing/:id" element={<Ap><DetailPresensiPembimbing /></Ap>}></Route>
        <Route path="/laporan_pembimbing" element={<Ap><LaporanPembimbing /></Ap>}></Route>
        <Route path="/laporan_pembimbing/:id" element={<Ap><DetailLaporanPembimbing /></Ap>}></Route>

        <Route path="/admin" element={<Ap><HomeAdmin /></Ap>}></Route>

        <Route path="/login" element={<Rp><Login /></Rp>}></Route>
        <Route path="/register" element={<Rp><Register /></Rp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

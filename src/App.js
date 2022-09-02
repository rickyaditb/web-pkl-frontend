import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// User Component
import Home from './components/user/Home.js';
import Presensi from './components/user/Presensi.js'
import DetailPresensi from './components/user/DetailPresensi.js';
import Laporan from './components/user/Laporan.js';
import TambahLaporan from './components/user/TambahLaporan.js';
import DetailLaporan from './components/user/DetailLaporan.js';
import EditLaporan from './components/user/EditLaporan.js';
import Pengaturan from './components/user/Pengaturan.js';
// Pembimbing Component
import HomePembimbing from './components/pembimbing/HomePembimbing';
// Universal Component
import Login from './components/Login.js';
import Register from './components/Register.js';


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-3 lg:px-16">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/presensi" element={<Presensi />}></Route>
            <Route path="/presensi/detail" element={<DetailPresensi />}></Route>
            <Route path="/laporan" element={<Laporan />}></Route>
            <Route path="/laporan/add" element={<TambahLaporan />}></Route>
            <Route path="/laporan/detail/:id" element={<DetailLaporan />}></Route>
            <Route path="/laporan/edit/:id" element={<EditLaporan />}></Route>
            <Route path="/pengaturan" element={<Pengaturan />}></Route>

            <Route path="/pembimbing" element={<HomePembimbing />}></Route>
          </Routes>
        </AuthProvider>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

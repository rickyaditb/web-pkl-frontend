import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Presensi from './components/Presensi.js'
import Laporan from './components/Laporan.js';
import TambahLaporan from './components/TambahLaporan.js';
import DetailLaporan from './components/DetailLaporan.js';
import Pengaturan from './components/Pengaturan.js';
import HomePembimbing from './components/HomePembimbing';
import Login from './components/Login.js';

function App() {
  return (
    <BrowserRouter>
      <div class="container mx-auto px-3 lg:px-16">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/presensi" element={<Presensi />}></Route>
          <Route path="/laporan" element={<Laporan />}></Route>
          <Route path="/laporan/add" element={<TambahLaporan />}></Route>
          <Route path="/laporan/detail/:id" element={<DetailLaporan />}></Route>
          <Route path="/pengaturan" element={<Pengaturan />}></Route>

          <Route path="/pembimbing" element={<HomePembimbing />}></Route>
        </Routes>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

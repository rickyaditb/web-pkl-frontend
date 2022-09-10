import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import moment from 'moment'

export default function MainEditLaporan() {
    const [tanggal_laporan, setTanggal] = useState("");
    const [isi_laporan, setIsi] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getLaporanById();
    }, []);

    const getLaporanById = async() => {
        const response = await axios.get(`http://localhost:5000/laporan/${id}`);
        setTanggal(response.data.tanggal_laporan);
        setIsi(response.data.isi_laporan);
    }

    const editLaporan = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/laporan/${id}`, {
                tanggal_laporan, isi_laporan
            });
            navigate("/laporan");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="col-span-12 lg:col-span-10">
            <div className="bg-white shadow rounded p-5 mb-10">
                <p className="text-center font-bold text-xl text-gray-600">Edit Laporan</p>
                <form className="mt-3" action="laporan.html" onSubmit={editLaporan}>
                    <label htmlFor="gambar" className="text-gray-700">Tanggal Laporan</label>
                    <input type="date" value={moment(tanggal_laporan).format('YYYY-MM-DD')} onChange={(e) => setTanggal(e.target.value)} id="gambar" name="gambar" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required/>
                    <label htmlFor="gambar" className="text-gray-700">Isi Laporan</label>
                    <textarea type="text" value={isi_laporan} onChange={(e) => setIsi(e.target.value)} id="gambar" name="gambar" rows="5" placeholder="Masukan Isi Laporan" className="gambar-form bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none" required></textarea>
                    <button className="py-3 px-3 rounded text-white bg-blue-400 font-bold cursor-pointer">Simpan Perubahan</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/id';

export default function MainDetailLaporan() {
    moment.locale('id');
    const [laporan, setLaporan] = useState([]);
    console.log(laporan)

    const { id } = useParams();

    useEffect(() => {
        getLaporanById();
    }, []);

    const getLaporanById = async () => {
        const response = await axios.get(`http://localhost:5000/laporan/${id}`);
        setLaporan(response.data);
    }

    if (laporan.length === 0) {
        return <></>;
    }

    return (
        <div className="col-span-12 lg:col-span-10">
            <div class="bg-white p-5 rounded shadow">
                <div class="text-center font-bold text-gray-600 text-xl">
                    <p>Laporan Kegiatan</p>
                    <p>{moment(laporan.tanggal_laporan).format('dddd, Do MMMM YYYY')}</p>
                </div>
                <div class="bg-gray-200 p-3 rounded text-gray-700 mt-3">{laporan.isi_laporan}</div>
            </div>
        </div>
    )
}
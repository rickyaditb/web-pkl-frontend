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
        <div className="col-span-12 lg:col-span-10 mb-10">
            <div class="bg-white rounded shadow px-5 py-3 mb-3 text-gray-700 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 mt-0.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p class="my-auto flex items-center gap-1">
                    <p>Laporan Kegiatan</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p>Detail Laporan Kegiatan</p>
                </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div className='col-span-3 md:col-span-1'>
                    <div class="bg-white p-3 rounded-lg shadow flex flex-col gap-3">
                        <div class="bg-white text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 my-auto mr-2 bg-blue-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <div class="border-l-2 pl-2 my-auto">
                                <p class="text-xs text-gray-500">Status Laporan</p>
                                <p class="text-lg -mb-1">Belum Ditinjau</p>
                            </div>
                        </div>
                        <div class="bg-white text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 my-auto mr-2 bg-red-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                            </svg>
                            <div class="border-l-2 pl-2 my-auto">
                                <p class="text-xs text-gray-500">Tanggal Laporan</p>
                                <p class="text-lg -mb-1">{moment(laporan.tanggal_laporan).format('Do MMMM YYYY')}</p>
                            </div>
                        </div>
                        <div class="bg-white text-gray-600 font-bold rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 my-auto mr-2 shrink-0 bg-purple-300 text-white p-2 rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                            </svg>
                            <div class="border-l-2 pl-2 my-auto whitespace-nowrap text-ellipsis">
                                <p class="text-xs text-gray-500">Lampiran Berkas</p>
                                <p class="text-lg -mb-1 truncate">Tidak Ada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-2'>
                    <div className="bg-white p-3 rounded shadow">
                        <div className="bg-gray-200 p-3 rounded text-gray-700">{laporan.isi_laporan}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
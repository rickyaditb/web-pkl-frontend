import React from 'react'
import CalendarImg from './img/calendar.svg'

export default function MainPresensi() {
    const d = new Date();
    const jam = `0${d.getHours()}`;
    const menit = `0${d.getMinutes()}`;
    const final = `${jam.slice(-2)}:${menit.slice(-2)} WIB`;
    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-2 shadow rounded">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-blue-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-gray-600 text-sm ">Waktu Absensi</p>
                            <p className="text-xl text-gray-600 font-bold -mt-1">08:00 - 15:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 shadow rounded">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-gray-600 text-sm ">Hari Absensi</p>
                            <p className="text-xl text-gray-600 font-bold -mt-1">Senin - Jumat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-3 p-5 sm:p-10 rounded shadow grid grid-cols-2">
                <img src={CalendarImg} className="w-64 sm:block hidden" />
                <div className="flex flex-col justify-center col-span-2 sm:col-span-1">
                    <div id="awal" class="transition ease-in">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm ">Hari dan Tanggal</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Senin, 15 Agustus 2022</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-blue-300 text-white p-2 mr-3 rounded" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm ">Waktu</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1" id="jam-hari-ini">{final}</p>
                            </div>
                        </div>
                        <div>
                            <button className="warna-main text-white px-5 py-3 font-bold rounded mt-3" onclick="absen()">Absen</button>
                        </div>
                    </div>
                    <div id="akhir" className="text-center hidden opacity-0 transition ease-in">
                        <p className="text-gray-700 text-2xl">Hari Ini Kamu sudah Absen<br />Terima Kasih!</p>
                    </div>
                </div>
            </div>
            <div className="ml-3 text-xl font-bold text-gray-600 flex mt-3">
                <p>Riwayat Absensi</p>
                <div className="flex my-auto ml-auto gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-3">
                <div className="bg-white p-3 rounded shadow cursor-pointer">Minggu 1</div>
                <div className="p-3 rounded shadow warna-main text-white font-semibold cursor-pointer">Minggu 2</div>
                <div className="bg-white p-3 rounded shadow cursor-pointer">Minggu 3</div>
                <div className="bg-white p-3 rounded shadow cursor-pointer">Minggu 4</div>
                <div className="bg-white p-3 rounded shadow cursor-pointer">Minggu 5</div>
                <div className="bg-white p-3 rounded shadow cursor-pointer">Minggu 6</div>
            </div>
            <div className="mt-2 mb-32 flex flex-col gap-2">
                <div className="bg-white shadow rounded p-3">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-red-300 text-white p-2 mr-3 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm ">Hari dan Tanggal Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Senin, 25 Juli 2022</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-gray-600 text-sm ">Jam Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">10:58 WIB</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm ">Keterangan</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Telat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded p-3">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm ">Hari dan Tanggal Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Selasa, 26 Juli 2022</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-gray-600 text-sm ">Jam Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">08:32 WIB</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm ">Keterangan</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Hadir</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded p-3">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-green-300 text-white p-2 mr-3 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-gray-600 text-sm ">Hari dan Tanggal Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Rabu, 27 Juli 2022</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p className="text-gray-600 text-sm ">Jam Absensi</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">09:02 WIB</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm ">Keterangan</p>
                                <p className="text-xl text-gray-600 font-bold -mt-1">Hadir</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
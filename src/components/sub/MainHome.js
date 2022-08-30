import React, {useContext} from 'react'
import AuthContext from 'context/AuthContext';
import moment from 'moment';

export default function MainHome() {
    const user = useContext(AuthContext);
    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in mb-64">
            <div>
                <div className="bg-white p-5 rounded-lg shadow transform transition flex items-center">
                    <img src="https://randomuser.me/api/portraits/men/79.jpg" className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                    <div className="ml-5">
                        <div className="flex flex-col gap-1">
                            <div>
                                <p className="text-gray-500">Nama</p>
                                <p className="font-bold text-gray-600 text-xl">{user.nama}</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Asal Instansi</p>
                                <p className="font-bold text-gray-600 text-xl">{user.instansi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mt-3">
                <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 my-auto mr-2 bg-green-300 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Status</p>
                        <p className="text-xl -mb-1">Aktif</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex hover:bg-blue-100 cursor-pointer transform transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 my-auto mr-2 bg-blue-300 text-white p-2 rounded-lg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Kehadiran</p>
                        <p className="text-2xl -mb-1">20</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 my-auto mr-2 bg-purple-300 text-white p-2 rounded-lg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Sakit / Izin</p>
                        <p className="text-2xl -mb-1">0</p>
                    </div>
                </div>
                <div className="bg-white text-gray-600 px-2 py-2 font-bold rounded-lg shadow flex">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 my-auto mr-2 bg-yellow-300 text-white p-2 rounded-lg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="border-l-2 pl-2 my-auto">
                        <p className="text-xs text-gray-500">Tanpa Ket.</p>
                        <p className="text-xl -mb-1">0</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-3">
                <div className="bg-white shadow rounded p-5 flex items-center col-span-2 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white bg-blue-400 p-2 rounded" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                    <div className="ml-3">
                        <p className="text-gray-700">Tanggal Mulai PKL</p>
                        <p className="text-gray-600 font-bold text-xl">{moment(user.tanggal_mulai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
                <div className="bg-white shadow rounded p-5 flex items-center col-span-2 md:col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white bg-red-400 p-2 rounded" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                    <div className="ml-3">
                        <p className="text-gray-700">Tanggal Selesai PKL</p>
                        <p className="text-gray-600 font-bold text-xl">{moment(user.tanggal_selesai).format('Do MMMM YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
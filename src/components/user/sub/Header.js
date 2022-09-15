import React from 'react'
import Logo from './img/logo.png'

export default function Header(props) {

    return (
        <div className={`bg-white p-5 mt-3 lg:mt-10 rounded-lg flex shadow items-center ${props.kelas}`}>
            <img src={Logo} className="w-16"/>
            <div>
                <p className="text-gray-600 font-bold ml-5 mt-1 text-2xl">Pengadilan Agama Bogor</p>
                <p className="text-gray-600 ml-5 text-xl">Sistem Informasi Staff Magang</p>
            </div>
            <div className="ml-auto hidden">
                <div className="mr-5 relative inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-10 text-gray-700 my-auto cursor-pointer" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clip-rule="evenodd" />
                    </svg>
                    <span
                        className="absolute top-5 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">5</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-full text-gray-700 my-auto cursor-pointer"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
            </div>
        </div>
    )
}
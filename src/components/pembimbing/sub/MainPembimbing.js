import React, { useState, useEffect, useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { Link } from 'react-router-dom';

export default function MainPembimbing() {
    const [user, setUser] = useState([]);


    const auth = useContext(AuthContext);

    useEffect(() => {
        getUser();
    }, [auth]);

    const getUser = async () => {
        const response = await auth.axiosJWT.get(`http://localhost:5000/user`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
        setUser(response.data);
    };


    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in mb-16">
            <div className="ml-3 text-xl font-bold text-gray-600 flex mb-3 gap-3">
                <div className="text-blue-500 border-b-2 border-blue-500 px-2 cursor-pointer">
                    <p className="mb-2">Staff Magang Aktif</p>
                </div>
                <div className="text-gray-500 border-b-2 hover:border-gray-500 px-2 cursor-pointer transition border-gray-100">
                    <p className="mb-2">Staff Magang Non-Aktif</p>
                </div>
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
            <div className="flex flex-col gap-3">
                {user.map((item, index) => (
                    <Link to={`/profile/${item._id}`} key={item._id} className="bg-white p-5 rounded-lg shadow transform transition flex items-center">
                        <img alt="foto-staff" src="https://randomuser.me/api/portraits/men/79.jpg" className="bg-gray-500 w-28 h-28 rounded-full mx-5" />
                        <div className="ml-5">
                            <div className="flex flex-col gap-1">
                                <div>
                                    <p className="text-gray-500">Nama</p>
                                    <p className="font-bold text-gray-600 text-xl">{item.nama}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Asal Instansi</p>
                                    <p className="font-bold text-gray-600 text-xl">{item.asal_instansi}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
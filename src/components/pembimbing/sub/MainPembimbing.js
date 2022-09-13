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
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in mb-1 md:mb-16">
            <div class="text-lg font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-white shadow mb-3">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Staff Magang Aktif</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Staff Magang Non Aktif</a>
                    </li>
                </ul>
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
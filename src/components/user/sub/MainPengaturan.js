import React, { useState, useContext } from 'react'
import AuthContext from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function MainPengaturan() {
    const [passwordLama, setPasswordLama] = useState("");
    const [passwordBaru, setPasswordBaru] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [berhasil, setBerhasil] = useState("");
    const navigate = useNavigate();

    const user = useContext(AuthContext);
    const _id = user.id;
    console.log(_id)

    const editPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/password/${_id}`, {
                passwordLama, passwordBaru
            });
            setBerhasil("Kata Sandi berhasil diubah");
            setErrorMsg("");
        } catch (error) {
            setErrorMsg(error.response.data.message);
            setBerhasil("")
        }
    }
    return (
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in mb-24">
            <div className="bg-white p-5 rounded shadow">
                <div className='font-bold text-gray-600 text-xl flex items-center gap-2 mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                    </svg>

                    <p>Ganti Kata Sandi</p>
                </div>
                {errorMsg ? <div className='bg-red-200 text-red-800 p-3 rounded my-2 font-semibold'>{errorMsg}</div> : <></>}
                {berhasil ? <div className='bg-green-200 text-green-800 p-3 rounded my-2 font-semibold'>{berhasil}</div> : <></>}
                <form onSubmit={editPassword}>
                    <label for="password-lama" className='text-gray-700'>Kata Sandi Lama</label>
                    <input type="password" value={passwordLama} onChange={(e) => setPasswordLama(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Lama' className='w-full bg-gray-100 p-3' required />
                    <label for="password-baru" className='text-gray-700'>Kata Sandi Baru</label>
                    <input type="password" value={passwordBaru} onChange={(e) => setPasswordBaru(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Baru' className='w-full bg-gray-100 p-3' required />
                    <button className='warna-main text-white font-bold p-3 rounded mt-3 w-full text-xl'>Ganti Password</button>
                </form>
                <div className='mt-3 bg-red-400 text-white font-bold p-3 rounded text-xl flex items-center gap-2 justify-center lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <p>Keluar</p>
                </div>
            </div>
        </div>
    )
}
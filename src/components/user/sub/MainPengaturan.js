import React, {useState, useContext} from 'react'
import AuthContext from 'context/AuthContext';
import {useNavigate} from 'react-router-dom';
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
        <div className="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in">
            <div className="bg-white p-5 rounded shadow">
                <p className='font-bold text-gray-600 text-xl'>Ganti Kata Sandi</p>
                {errorMsg ? <div className='bg-red-200 text-red-800 p-3 rounded my-2 font-semibold'>{errorMsg}</div> : <></>}
                {berhasil ? <div className='bg-green-200 text-green-800 p-3 rounded my-2 font-semibold'>{berhasil}</div> : <></>}
                <form onSubmit={editPassword}>
                    <label for="password-lama" className='text-gray-700'>Kata Sandi Lama</label>
                    <input type="password" value={passwordLama} onChange={(e) => setPasswordLama(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Lama' className='w-full bg-gray-100 p-3' required/>
                    <label for="password-baru" className='text-gray-700'>Kata Sandi Baru</label>
                    <input type="password" value={passwordBaru} onChange={(e) => setPasswordBaru(e.target.value)} id="password-lama" placeholder='Masukan Kata Sandi Baru' className='w-full bg-gray-100 p-3' required/>
                    <button className='warna-main text-white font-bold p-3 rounded mt-3'>Simpan</button>
                </form>
            </div>
        </div>
    )
}
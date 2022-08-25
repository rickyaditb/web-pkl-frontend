import React from 'react'

export default function MainPengaturan() {
    return (
        <div class="col-span-12 md:col-span-8 lg:col-span-7 transition duration-300 ease-in">
            <div class="bg-white p-5 rounded shadow">
                <p className='font-bold text-gray-600 text-xl'>Ganti Password</p>
                <div>
                    <label for="password-lama" className='text-gray-700'>Password Lama</label>
                    <input type="password" id="password-lama" placeholder='Masukan Password Lama' className='w-full bg-gray-100 p-3' />
                    <label for="password-baru" className='text-gray-700'>Password Baru</label>
                    <input type="password" id="password-lama" placeholder='Masukan Password Baru' className='w-full bg-gray-100 p-3' />
                </div>
            </div>
        </div>
    )
}
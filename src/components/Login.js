import React from "react"
import LoginImg from "./sub/img/login.svg"
import Logo from './sub/img/logo.png'

export default function Login() {
    return (
    <div class="container mx-auto p-5 md:grid grid-cols-2 h-screen bg-white">
        <div class="px-8 mx-auto mt-16 md:m-0 md:my-auto">
            <img src={LoginImg}/>
        </div>
        <div class="mt-10 md:my-auto md:mx-16 transition duration-500" id="login">
            <img src={Logo} class="w-32 mx-auto mb-3 hidden md:block"/>
            <form>
                <p class="text-center font-bold text-2xl text-gray-600 mb-3">Sistem Informasi Staff Magang</p>
                <label for="email" class="text-gray-700">Email</label><br/>
                <input type="text" id="email" name="email" placeholder="Masukan Email Anda"
                    class="bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none"/><br/>
                <label for="password" class="text-gray-700">Kata Sandi</label><br/>
                <input type="password" id="password" name="password" placeholder="Masukan Password Anda"
                    class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none"/><br/><br/>
                <input type="submit" value="Masuk"
                    class="w-full py-3 rounded-lg text-white warna-main font-bold cursor-pointer"/>
            </form>
            <a href="#">
                <p class="text-center text-gray-500 mt-5 mb-10 sm:mb-0" onclick="switchToRegister()">Belum punya akun ?
                    Daftar Disini</p>
            </a>
        </div>
        <div class="mt-10 md:my-auto md:mx-16 transition duration-500 hidden" id="register">
            <form>
                <p class="text-center font-bold text-2xl text-gray-600 mb-10">Learning Management System</p>
                <label for="name" class="text-gray-700">Nama Anda</label><br/>
                <input type="text" id="name" name="name" placeholder="Masukan Nama Anda"
                    class="bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none"/><br/>
                <label for="email" class="text-gray-700">Email</label><br/>
                <input type="text" id="email" name="email" placeholder="Masukan Email Anda"
                    class="bg-gray-100 w-full py-3 px-3 rounded-lg mb-5 focus:outline-none focus:ring-2 border-none"/><br/>
                <label for="password" class="text-gray-700">Kata Sandi</label><br/>
                <input type="password" id="password" name="password" placeholder="Masukan Password Anda"
                    class="bg-gray-100 w-full py-3 px-3 rounded-lg focus:outline-none focus:ring-2 border-none"/><br/><br/>
                <input type="submit" value="Daftar"
                    class="w-full py-3 rounded-lg text-white warna-main font-bold cursor-pointer"/>
            </form>
            <a href="#">
                <p class="text-center text-gray-500 mt-5">Sudah punya akun ? Masuk Disini</p>
            </a>
        </div>
    </div>
    )
}
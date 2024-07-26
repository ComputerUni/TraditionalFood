import {React, useRef, useState, useEffect} from 'react';
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Debug: Form verilerini kontrol et
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log('Response:', response); // Debug: API yanıtını kontrol et
      alert('User registered successfully');
    } catch (error) {
      console.error('Error:', error); // Debug: Hataları kontrol et
      alert('Error registering user');
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-contain bg-cover bg-center  bg-banner-image  ">
      <div className="lg:w-[600px] h-[450px] bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 py-20 px-10 rounded-bl-[80px] rounded-se-[80px] shadow-lg bg-regal-blue ">
        <h1 className="text-center text-2xl font-bold mb-1  relative pt-0"> Üye Ol </h1>
        <div className="space-y-6">
          <div className="flex items-center bg-transparent p-2 rounded">
            <IoPerson className="text-black-500 mr-2" />
          <input type="text" placeholder="Ad" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
          <IoPerson className="text-black-500 mr-2" />
          <input type="text" placeholder="Soyad" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
          </div>
          <div className="flex items-center bg-transparent p-2 rounded">
            <IoPerson className="text-black-500 mr-2" />
            <input type="text" placeholder="Kullanıcı Adı" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
            <MdEmail className="text-black-500 mr-2"/>
            <input type="email" placeholder="e-mail adresi" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold"/>
          </div>
          <div className="flex items-center bg-transparent p-2 rounded">
            <RiLockPasswordFill className="text-black-500 mr-2" />
            <input type="password" placeholder="Şifre" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
            <RiLockPasswordFill className="text-black-500 mr-2" />
            <input type="password" placeholder="Şifreyi Onaylayın" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
          </div>
          <div className="flex items-center bg-transparent p-15 m-35">
            <button type="submit" className="bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 hover:bg-blue-700 text-yellow-900 font-bold py-2 px-4 border border-blue-700 rounded m-8">Üye Ol </button> 
            <Link to = "/home">
            <button className="bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 hover:bg-blue-700 text-yellow-900 font-bold py-2 px-4 border border-blue-700 rounded">Zaten üye misiniz Giriş yapın.</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

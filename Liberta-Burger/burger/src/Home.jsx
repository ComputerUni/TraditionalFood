import React from 'react';
import Register from './register';
import { Router, Route, Routes, Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import axios from 'axios';

function Home() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login data:', formData); // Debug: Login verilerini kontrol et
    try {
      const response = await axios.post('http://localhost:5173/Home', formData);
      console.log('Response:', response); // Debug: API yanıtını kontrol et
      alert('User logged in successfully');
      navigate('/dashboard'); // Giriş başarılı ise yönlendirme yap
    } catch (error) {
      console.error('Error:', error); // Debug: Hataları kontrol et
      alert('Error logging in');
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-contain bg-cover bg-center  bg-banner-image  ">
      <div className="lg:w-[450px] h-[400px] bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 py-20 px-10 rounded-bl-[40px] rounded-se-[40px] shadow-lg bg-regal-blue ">
        <h1 className="text-center text-2xl font-bold mb-8"> Giriş Yap </h1>
        <div className="space-y-6">
          <div className="flex items-center bg-transparent p-2 rounded">
            <IoPerson className="text-black-500 mr-2" />
            <input type="text" placeholder="Kullanıcı Adı" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
          </div>
          <div className="flex items-center bg-transparent p-2 rounded">
            <RiLockPasswordFill className="text-black-500 mr-2" />
            <input type="password" placeholder="Şifre" className="bg-transparent flex-1 focus:outline-none border:none placeholder-black font-bold" />
          </div>
          <div className="flex items-center bg-transparent p-15 m-35">
            <button type="submit" className="bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 hover:bg-blue-700 text-yellow-900 font-bold py-2 px-4 border border-blue-700 rounded m-1">Giriş Yap </button>
            <Link to="/register">
              <button className="bg-gradient-to-br from-yellow-50 via-violet-50 to-amber-500 hover:bg-blue-700 text-yellow-900 font-bold py-2 px-4 border border-blue-700 rounded">Hesabınız yok mu? Üye olun.</button>
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Home;

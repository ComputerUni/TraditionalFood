import React from 'react'
import {Link} from 'react-router-dom';
import Gaziantep from '../assets/gaziantep.webp';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Gaziantep})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  )
}
export default Home;
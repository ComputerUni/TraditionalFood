import React from 'react'
import gazi from '../assets/bak.jpg'
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${gazi})`}}>

      </div>
      <div className='rightSide'>
      <h1>Bizimle İletişime Geçin</h1>
      <form>
        <label>Ad Soyad</label>
        <input type='text' name='name' placeholder='Lütfen adınızı ve soyadınızı giriniz...'></input>

        <label>Email</label>
        <input type='email' name='email' placeholder='Lütfen email adresinizi giriniz...'></input>

        <label>Mesajınız</label>
        <textarea rows="6" name='message' placeholder='Lütfen mesajınızı giriniz...'></textarea>
      </form>
      </div>
    </div>
  )
}
export default Contact;




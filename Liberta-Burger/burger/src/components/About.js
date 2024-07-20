import React from 'react'
import g from '../assets/Gaziantep.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${g})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>
        Tarihi zenginliği ve coğrafi konumuyla ülkemizin en önemli yerleşim merkezlerinden biri olan Gaziantep, 
        yemeklerinin çeşitliliği ile Türk Mutfak Geleneğini renklendiren özgün bir kültürel yapı ortaya koymaktadır. 
        Tarih boyunca havasını, suyunu ve toprağını sevip, burayı yurt edinen insanlar farklı diller, dinler ve etnik kökenlere 
        sahip olsalar da ortak bir damak tadında buluşmuş ve günümüzün zengin Gaziantep Mutfak Kültürü’nün ortaya çıkmasında 
        pay sahibi olmuşlardır. Gaziantep Mutfağı, yüzyıllardan beri topraklarında hüküm süren medeniyetlerin izlerini 
        günümüze taşıyan evrensel bir zenginliğimizdir. Nineden toruna bir miras titizliği ile öğretilen yemeklerin ve tatlıların 
        yapımında kullanılan malzemelerin seçimindeki titizlik, hazırlama ve pişirmede gösterilen beceri, yemeklerin yapımında 
        kullanılan ve yemeklerde değişik tat ve lezzet veren baharatlar, salçalar, soslar ve karışımlar, Gaziantep yemeklerinin ve tatlılarının 
        şöhrete kavuşmasına ve aranılan tat olmasına neden olmuştur. 400’ün üzerinde yemek çeşidine sahip Gaziantep yemeklerinde, 
        haşlama, ızgara, tava, sote, kavurma, tencere yemeği, fırın yemeklerinin içinde bulunduğu tüm pişirme teknikleri kullanılmıştır.
        Gaziantep, Avrupalı Seçkin Destinasyonlar Projesi’nin (EDEN) 2015 yılı Ulusal Destinasyonu “Yerel Gastronomi ve Turizm” teması ödülünü almıştır. 
        Ayrıca, Gaziantep Mutfağı, UNESCO Yürütme Kurulunun aldığı karar doğrultusunda 116 şehrin katılımı ile kurulan Yaratıcı Şehirler Ağı Listesine
        11.12.2015 tarihinde girerek Dünya mutfakları arasında hak ettiği yeri almıştır.
        </p>
      </div>
    </div>
    
  )
}
export default About;

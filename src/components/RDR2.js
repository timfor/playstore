import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import SWname from '../assets/images/Red_Dead_Redemption_2_Logo.png'
import RDR from '../assets/images/RDR2.avif'
import RDRvideo from '../assets/media/Red Dead Redemption 2 PC Trailer.mp4'
import RDRdigital from '../assets/images/RDR2delux.avif'
const RDR2 = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>RED DEAD REDEMPTION 2</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={RDRvideo}></video>

    </div>
    <div className='info'>
    <img alt='' src={SWname}></img>
    <p>2 499,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={RDR}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
        Red Dead Redemption 2</h1>
          <p>Обладатель более 175 наград «Игра года» и более 250 отличных оценок, Red Dead Redemption 2 — это эпическая история о чести и верности на заре новой эры.</p>
          <h1 className='h1-edition-1'>2 499,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={RDRdigital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
   
Red Dead Redemption 2: Ultimate Edition</h1>
          <p>

          Red Dead Redemption 2: Ultimate Edition включает в себя весь контент сюжетного режима из Special Edition, а также дополнительные бонусы для Red Dead Online, включая бонусные наряды для вашего сетевого персонажа, бонусы за ранг.</p>
          <h1 className='h1-edition-1'>4 999,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  <h1 className='h1-edition'>СИСТЕМНЫЕ ТЕБОВАНИЯ</h1>
  <div className='sistem'>
    <div className='sitem-1'>
  <h2>Минимальные</h2>
  <h2>Рекомендуемые</h2>
  </div>
  <div className='sitem-1'>
  <h2>OC</h2>
  <h2>OC</h2>
  </div>
  <div className='sitem-1'>
  <h3>Windows 10</h3>
  <h3>Windows 10</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3>Intel® Core™ i5-2500K / AMD FX-6300</h3>
  <h3>Intel® Core™ i7-4770K / AMD Ryzen 5 1500x</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>8 GB</h3>
  <h3>12 GB</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>150 GB</h3>
  <h3>150 GB</h3>
  </div>
  <div className='sitem-1'>
  <h2>DirectX</h2>
  <h2>DirectX</h2>
  </div>
  <div className='sitem-1'>
  <h3>DirectX-kompatible Soundkarte</h3>
  <h3>DirectX-kompatible Soundkarte</h3>
  </div>
  </div>
      </main>
        </>
    );
}
export default RDR2;
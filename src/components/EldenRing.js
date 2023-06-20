import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo/Elden_Ring.webp'
import card from '../assets/edition/MK1.avif'
import video from '../assets/media/ELDEN RING.mp4'
import digital from '../assets/edition/MK1_premium.jpg'
const EldenRing = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>Elden Ring</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={video}></video>

    </div>
    <div className='info'>
    <img alt='' src={logo}></img>
    <p>3 499,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
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
  <h3> Windows 10 (64 bit)</h3>
  <h3>Windows 10 (64 bit)/Windows 11 (64 bit)</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3> AMD Ryzen 3 1200 / Intel Core i5-7500</h3>
  <h3> AMD Ryzen 5 3600 / Intel Core i7 8700</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3> 8 GB RAM</h3>
  <h3> 16 GB RAM</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>40 GB</h3>
  <h3>40 GB</h3>
  </div>
  <div className='sitem-1'>
  <h2>DirectX</h2>
  <h2>DirectX</h2>
  </div>
  <div className='sitem-1'>
  <h3>12</h3>
  <h3>12</h3>
  </div>
  </div>
      </main>
        </>
    );
}
export default EldenRing;
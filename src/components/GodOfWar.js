import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo/godofwar.avif'

import video from '../assets/media/God of War.mp4'

const GodOfWar = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>God of War</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={video}></video>

    </div>
    <div className='info'>
    <img alt='' src={logo}></img>
    <p>1 999,99 ₽</p>
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
  <h3>Windows 10</h3>
  <h3>Windows 10</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3>Intel i5-2500k (4 Kerne mit 3,3 GHz) oder AMD Ryzen 3 1200 (4 Kerne mit 3,1 GHz)</h3>
  <h3>Intel i5-6600k (4 Kerne mit 3,5 GHz) oder AMD Ryzen 5 2400 G (4 Kerne mit 3,6 GHz)</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>8 GB DDR</h3>
  <h3>8 GB DDR</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>70 GB HDD</h3>
  <h3>70 GB SSD</h3>
  </div>
  <div className='sitem-1'>
  <h2>DirectX</h2>
  <h2>DirectX</h2>
  </div>
  <div className='sitem-1'>
  <h3>DirectX 11 (Feature-Level 11_1)</h3>
  <h3>DirectX 11 (Feature-Level 11_1)</h3>
  </div>
  </div>
      </main>
        </>
    );
}
export default GodOfWar;
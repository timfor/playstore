import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo/MK1.avif'
import card from '../assets/edition/MK1.avif'
import video from '../assets/media/Mortal Kombat 1.mp4'
import digital from '../assets/edition/MK1_premium.jpg'
const MortalKombat1 = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>Mortal Kombat 1</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={video}></video>

    </div>
    <div className='info'>
    <img alt='' src={logo}></img>
    <p>5 949,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={card}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
    Mortal Kombat 1</h1>
          <p>Откройте для себя возрожденную вселенную Mortal Kombat, созданную богом огня Лю Каном. Mortal Kombat 1 представляет новую эру культовой франшизы с новой боевой системой, игровыми режимами и смертельными исходами!</p>
          <h1 className='h1-edition-1'>5 949,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={digital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
   
   
Mortal Kombat 1 Premium Edition</h1>
          <p>

          Премиум-версия включает в себя боевой набор, доступ к загружаемым персонажам на 1 неделю раньше и 1250 кристаллов дракона (внутриигровая валюта).</p>
          <h1 className='h1-edition-1'>7 999,99 ₽</h1>
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
export default MortalKombat1;
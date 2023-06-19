import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import SWname from '../assets/images/SW-name.png'
import SW from '../assets/images/JW-1.jpg'
import SWvideo from '../assets/media/SW2.mp4'
import SWdigital from '../assets/images/SWdigital.jpg'
const StarWars = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>STAR WARS Jedi: Survivor</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={SWvideo}></video>

    </div>
    <div className='info'>
    <img alt='' src={SWname}></img>
    <p>5 873,04 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={SW}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
          STAR WARS Jedi: Survivor™ Standard Edition</h1>
          <p>История Кэла Кестиса продолжается в Star Wars Jedi: Survivor™, галактическом приключенческом боевике от третьего лица от Respawn Entertainment и Lucasfilm Games.</p>
          <h1 className='h1-edition-1'>5 873,04 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={SWdigital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
    STAR WARS Jedi: Survivor™ Deluxe Edition</h1>
          <p>

Разблокируйте эксклюзивные косметические предметы, вдохновленные Ханом Соло™ и Люком Скайуокером™ и представленные в «ЗВЁЗДНЫЕ ВОЙНЫ: Новая надежда», в издании Star Wars Jedi: Survivor Deluxe Edition*!</p>
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
  <h3>Windows 10 (64 Bit)</h3>
  <h3>Windows 10 (64 Bit)</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3>4 Kerne / 8 Threads | Intel Core i7-7700 | Ryzen 5 1400</h3>
  <h3>4 Kerne / 8 Threads | Intel Core i5 11600K | Ryzen 5 5600X</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>8 GB</h3>
  <h3>16 GB</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>155 GB</h3>
  <h3>155 GB</h3>
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
export default StarWars;
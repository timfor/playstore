import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import ASname from '../assets/content/ASMirage.webp'
import AS from '../assets/edition/ASmirage-standart.avif'
import ASvideo from '../assets/media/ASmirage.mp4'
import ASdigital from '../assets/edition/ASmirage-delux.avif'
const ASMirage = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>Assassins Creed: Mirage</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={ASvideo}></video>

    </div>
    <div className='info'>
    <img alt='' src={ASname}></img>
    <p>5 949,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={AS}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
    Assassin's Creed Mirage</h1>
          <p>Узнайте историю Басима, коварного уличного вора с кошмарными видениями, который бродит по оживленным улицам Багдада.</p>
          <h1 className='h1-edition-1'>5 949,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={ASdigital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
   
Assassin's Creed Mirage Deluxe Edition</h1>
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
  <h3>TBD</h3>
  <h3>TBD</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3>TBD</h3>
  <h3>TBD</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>TBD</h3>
  <h3>TBD</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>TBD</h3>
  <h3>TBD</h3>
  </div>
  <div className='sitem-1'>
  <h2>DirectX</h2>
  <h2>DirectX</h2>
  </div>
  <div className='sitem-1'>
  <h3>TBD</h3>
  <h3>TBD</h3>
  </div>
  </div>
      </main>
        </>
    );
}
export default ASMirage;
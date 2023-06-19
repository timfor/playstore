import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import TLOUname from '../assets/images/TLOU.png'
import TLOUst from '../assets/content/TLOU.jpg'
import TLOUvideo from '../assets/media/«Одни из нас Часть I» Анонсирующий трейлер PS5 Полностью на русском языке 4K 60 FPS.mp4'
import TLOUdigital from '../assets/content/TLOUdigital.jpg'
const TLOU = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>The Lust Of Us Remake</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={TLOUvideo}></video>

    </div>
    <div className='info'>
    <img alt='' id='src-1' src={TLOUname}></img>
    <p>4 999,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={TLOUst }></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
         The Last of Us™ Part I</h1>
          <p>Испытайте эмоциональную историю и персонажей The Last of Us™, получившей более 200 наград «Игра года».</p>
          <h1 className='h1-edition-1'>4 999,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={TLOUdigital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
    The Last of Us™ Part I - Digital Deluxe Edition</h1>
          <p>

          Испытайте эмоциональную историю и персонажей The Last of Us™, получившей более 200 наград «Игра года».</p>
          <h1 className='h1-edition-1'>5 999,99 ₽</h1>
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
  <h3>Windows 10 (64-Bit, Version 1909 oder neuer)</h3>
  <h3>Windows 10 (64-Bit, Version 1909 oder neuer)</h3>
  </div>
  <div className='sitem-1'>
  <h2>Процессор</h2>
  <h2>Процессор</h2>
  </div>
  <div className='sitem-1'>
  <h3>AMD Ryzen 5 1500X, Intel Core i7-4770K</h3>
  <h3>AMD Ryzen 5 3600X, Intel Core i7-8700</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>16 GB</h3>
  <h3>16 GB</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>100 GB (SSD)</h3>
  <h3>100 GB (SSD)</h3>
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
export default TLOU;
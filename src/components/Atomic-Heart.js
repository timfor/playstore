import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo/atomic.webp'
import card from '../assets/images/atomic-heart.jpeg'
import video from '../assets/media/Atomic Heart.mp4'
const AtomicHeart = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>Atomic Heart</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={video}></video>

    </div>
    <div className='info'>
    <img alt='' src={logo}></img>
    <p>1 499,99 ₽</p>
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
    Atomic Heart</h1>
          <p>Действие Atomic Heart происходит в альтернативном СССР, в котором страна вышла на массовое производство роботов, обслуживающих население страны. Главным героем игры является майор Сергей Нечаев, — агент советской разведки под псевдонимом П-3 — прибывший на предприятие по производству роботов под кодовым названием «3826», находящемся в КазССР</p>
          <h1 className='h1-edition-1'>2 499,99 ₽</h1>
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
  <h3>Intel Core i5-3570K oder AMD FX-8310</h3>
  <h3>Intel Core i7-4790 oder AMD Ryzen 3 3200G</h3>
  </div>
  <div className='sitem-1'>
  <h2>Оперативная память</h2>
  <h2>Оперативная память</h2>
  </div>
  <div className='sitem-1'>
  <h3>8 GB RAM</h3>
  <h3>12 GB RAM</h3>
  </div>
  <div className='sitem-1'>
  <h2>Место на диске</h2>
  <h2>Место на диске</h2>
  </div>
  <div className='sitem-1'>
  <h3>70 GB (SSD empfohlen)</h3>
  <h3>70 GB (SSD empfohlen)</h3>
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
export default AtomicHeart;
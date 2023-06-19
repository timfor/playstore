import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo/starfield.webp'
import card from '../assets/content/starfield.jpg'
import video from '../assets/media/Starfield.mp4'
import digital from '../assets/content/starfield.jpg'
const StarWars = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>STARFIELD</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={video}></video>

    </div>
    <div className='info'>
    <img alt='' src={logo}></img>
    <p>5 873,04 ₽</p>
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
    STARFIELD</h1>
          <p>Starfield — первая новая вселенная за более чем 25 лет от Bethesda Game Studios, отмеченных наградами создателей The Elder Scrolls V: Skyrim и Fallout 4.</p>
          <h1 className='h1-edition-1'>5 873,04 ₽</h1>
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
    STARFIELD DIGITAL PREMIUM EDITION</h1>
          <p>

          Starfield — первая новая вселенная за более чем 25 лет от Bethesda Game Studios, отмеченных наградами создателей The Elder Scrolls V: Skyrim и Fallout 4.</p>
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
  <h3>AMD Ryzen 5 2600X, Intel Core i7-6800K</h3>
  <h3> AMD Ryzen 5 3600X, Intel i5-10600K</h3>
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
  <h3>125 GB</h3>
  <h3>125 GB</h3>
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
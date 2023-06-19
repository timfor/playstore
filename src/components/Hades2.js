import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import Hadesname from '../assets/images/hades2-logo.avif'
import SW from '../assets/images/JW-1.jpg'
import Hadesvideo from '../assets/media/Hades II.mp4'
import SWdigital from '../assets/images/SWdigital.jpg'
const Hades2 = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>HADES II</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={Hadesvideo}></video>

    </div>
    <div className='info'>
    <img alt='' src={Hadesname}></img>
    <p>TBD</p>
    <h1 className='content-button'>ПРЕДЗАКАЗАТЬ</h1>
    
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
export default Hades2;
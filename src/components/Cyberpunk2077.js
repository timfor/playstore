import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import Cyberpunk2077name from '../assets/logo/cyberpunk2077.png'
import Cyberpunk20771 from '../assets/edition/Cyberpunk2077.jpg'
import Cyberpunk2077video from '../assets/media/Cyberpunk 2077.mp4'
import Cyberpunk2077digital from '../assets/edition/Cyberpunk2077PhantomLiberty.avif'
const Cyberpunk2077 = () => {
    return (
        <>
      <main>
      
<div className='content-1'>
    <div className='content'>
        <h1>Cyberpunk 2077</h1>
  <video alt='no' className='content-img' muted autoplay='' loop controls src={Cyberpunk2077video}></video>

    </div>
    <div className='info'>
    <img alt='' src={Cyberpunk2077name}></img>
    <p>1 499,99 ₽</p>
    <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
    
    <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
    <h1  className='content-button-1'> В СПИСОК ЖЕЛАНИЙ</h1 >
    </div>
    </div>
    <h1 className='h1-edition'>EDITION</h1>
  <div className='edition'>
    <img alt=''className='content-img-1' src={Cyberpunk20771}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
    Cyberpunk 2077</h1>
          <p>Откройте для себя мир киберпанка во всём его многообразии, от многогранной истории Cyberpunk 2077 и шпионских интриг в дополнении «Призрачная свобода» до трогательных эпизодов популярного аниме Cyberpunk: Edgerunners, завоевавшего множество наград. Опасный мегаполис Найт-Сити всегда найдёт, чем вас удивить.</p>
          <h1 className='h1-edition-1'>1 499,99 ₽</h1>
          <div className='edition-button'>
          <h1 className='content-button'>КУПИТЬ СЕЙЧАС</h1>
          <h1  className='content-button-1'>ДОБАВИТЬ В КОРЗИНУ</h1 >
          </div>
          </div>
          
  </div>
  
  <div className='edition'>
    <img alt=''className='content-img-1' src={Cyberpunk2077digital}></img>
    <div className='edition-content'>
    <h1 className='h1-edition-1'>
   
Cyberpunk 2077: Phantom Liberty</h1>
          <p>

          Phantom Liberty — это шпионское дополнение к приключенческой ролевой игре Cyberpunk 2077 с открытым миром. Играя за Наемника V, работайте вместе с секретным агентом Соломоном Ридом, чтобы спасти паутину разорванных связей и зловещих политических связей.</p>
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
export default Cyberpunk2077;
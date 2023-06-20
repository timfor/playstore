
import { NavLink } from 'react-router-dom';
import '../App.css'
import SW from '../assets/images/SW.jpeg'
import AtomicHeart from '../assets/images/atomic-heart.jpeg'
import DeadIsland2 from '../assets/images/Dead-Island-2.jpeg'
import TLOU from '../assets/images/the-lust-of-us.jpeg'
import EldenRing from '../assets/images/elden-ring.jpeg'
import React, { useState, useEffect } from 'react';
import StarWars from './StarWars';
import SWname from '../assets/images/SW-name.png'
import './style.scss'
import SWJS from '../assets/images/swjs.jpg'
import AH from '../assets/images/AtomicHeart.jpg'
import ResidentEvil4 from '../assets/images/re4.png'
import TheLustOfUs from '../assets/content/The_Last_of_Us_Part_I_-_Обложка.png'
import EldenRing2 from '../assets/images/EldenRing.png'
import Skyrim from '../assets/images/Skyrim.jpg'
import Witcher3 from '../assets/images/witcher3.jpg'
import Cyberpunk2077 from '../assets/images/cyberpunk2077.jpg'
import RedDead2 from '../assets/images/RedDead2.jpg'
import GOW from '../assets/images/god.jpg'
import MK1 from '../assets/images/MK1.png'
import StarField from '../assets/images/StarField.jpg'
import ASMirage from '../assets/images/ASMirage.jpeg'
import Hades2 from '../assets/images/hades2.jpg'
import LordsFallen from '../assets/images/LordsFallen.jpg'
const images = [
  {
    src: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/843c3f01d7514294f7e414eae4fd9cdc.png',
    text: 'Вас ждёт новое приключение с Кэлом Кестисом в игре от студии Respawn Entertainment, приключенческом экшене с видом от третьего лица.',
    mani: 'от 3 499 P',
   img: 'https://cdn.mos.cms.futurecdn.net/RD2s9FGPu7DyUsh6woRtQf.jpg'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atomic_Heart_logo.svg/800px-Atomic_Heart_logo.svg.png?20230219161324',
    text: ' Atomic Heart — компьютерная игра в жанре шутера от первого лица с элементами ролевой игры, разработанная российской студией Mundfish.',
    mani: 'от 1 999 P',
    img: 'https://www.godisageek.com/wp-content/uploads/Atomic-Heart-review.jpg'
  },
  {
    src: 'https://cdn2.unrealengine.com/egs-deadisland2-deepsilverdambusterstudios-ic1-400x196-9cbd3690d951.png?h=270&quality=medium&resize=1&w=480',
    text: ' Действие Dead Island 2 разворачивается спустя 10 лет после событий предыдущей части. Местом действия является Лос-Анджелес, штат Калифорния. ',
    mani: 'от 2 499 P',
    img: 'https://games.mail.ru/hotbox/content_files/game/2022/08/24/1d056e9c046d46e4a16c5fa6b9559a6d.jpg'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/67/The_Last_of_Us_Logo_2.png',
    text: ' Боритесь и выживайте Погрузитесь в драматичную историю о незабываемых персонажах в игре «Одни из нас» – обладательнице более 200 наград «Игра года», уже доступной на ПК.',
    mani: 'от 3 499 P',
    img: 'https://hyperpc.ru/images/support/articles/the-last-of-us/content/the-lust-of-us-part-1-banner_webp.jpg'
  },
  {
    src: 'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/eldenring_new.png',
    text: ' НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден. ',
    mani: 'от 3 499 P',
    img: 'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg'
  }
 ];
  const images1 = [
    'https://www.godisageek.com/wp-content/uploads/Atomic-Heart-review.jpg',
    'https://games.mail.ru/hotbox/content_files/game/2022/08/24/1d056e9c046d46e4a16c5fa6b9559a6d.jpg',
    'https://hyperpc.ru/images/support/articles/the-last-of-us/content/the-lust-of-us-part-1-banner_webp.jpg',
    'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg',
    'https://cdn.mos.cms.futurecdn.net/RD2s9FGPu7DyUsh6woRtQf.jpg',
  ];
  const images2 = [
    'https://games.mail.ru/hotbox/content_files/game/2022/08/24/1d056e9c046d46e4a16c5fa6b9559a6d.jpg',
    'https://hyperpc.ru/images/support/articles/the-last-of-us/content/the-lust-of-us-part-1-banner_webp.jpg',
    'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg',
    'https://cdn.mos.cms.futurecdn.net/RD2s9FGPu7DyUsh6woRtQf.jpg',
    'https://www.godisageek.com/wp-content/uploads/Atomic-Heart-review.jpg',
  ];
  const images3 = [
   
    'https://hyperpc.ru/images/support/articles/the-last-of-us/content/the-lust-of-us-part-1-banner_webp.jpg',
    'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg',
    'https://cdn.mos.cms.futurecdn.net/RD2s9FGPu7DyUsh6woRtQf.jpg',
    'https://www.godisageek.com/wp-content/uploads/Atomic-Heart-review.jpg',
    'https://games.mail.ru/hotbox/content_files/game/2022/08/24/1d056e9c046d46e4a16c5fa6b9559a6d.jpg',
  ];
  const images4 = [
    
    'https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg',
    'https://cdn.mos.cms.futurecdn.net/RD2s9FGPu7DyUsh6woRtQf.jpg',
    'https://www.godisageek.com/wp-content/uploads/Atomic-Heart-review.jpg',
    'https://games.mail.ru/hotbox/content_files/game/2022/08/24/1d056e9c046d46e4a16c5fa6b9559a6d.jpg',
    'https://hyperpc.ru/images/support/articles/the-last-of-us/content/the-lust-of-us-part-1-banner_webp.jpg',
  ];
const Main = () => {



  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[index];
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);

    const nextImage1 = () => {
      setCurrentImageIndex1((currentImageIndex1 + 1) % images1.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage1();
      }, 10000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex1]);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    const nextImage2 = () => {
      setCurrentImageIndex2((currentImageIndex2 + 1) % images2.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage2();
      }, 10000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex2]);
    const [currentImageIndex3, setCurrentImageIndex3] = useState(0);

    const nextImage3 = () => {
      setCurrentImageIndex3((currentImageIndex3 + 1) % images3.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage3();
      }, 10000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex3]);
    const [currentImageIndex4, setCurrentImageIndex4] = useState(0);

    const nextImage4 = () => {
      setCurrentImageIndex4((currentImageIndex4 + 1) % images4.length);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextImage4();
      }, 10000);
  
      return () => clearInterval(intervalId);
    }, [currentImageIndex4]);


    return (
        <>
        <main>
            <div className='Cards'>
            <div className='Conteiner-img-SW'  >
             <img alt='no' className='Conteiner-img' src={currentImage.img}/>
        <img alt='no' className='Conteiner-img-name'   src={currentImage.src}/>
        <p>{currentImage.text}</p>
        <h1>{currentImage.mani}</h1>
        <button>КУПИТЬ СЕЙЧАС</button>
        </div>
                <div className='Container-1'>
                 <div className='slider' ><img alt='no' src={images1[currentImageIndex1]} className='Card-mini'></img></div>
                 <img alt='no' src={images2[currentImageIndex2]} className='Card-mini'></img>
                 <img alt='no' src={images3[currentImageIndex3]} className='Card-mini'></img>
                 <img alt='no' src={images4[currentImageIndex4]} className='Card-mini'></img>
                </div>
            </div>
            <div class="box">
   <h1 class="glitch">Популярное</h1>
</div>
<hr className='hr'></hr>

            <div className='Games'>

             <NavLink to='./StarWars'> <div className='Game'>
                <img alt='no' src={SWJS} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>STAR WARS Jedi: Survivor</h1>
                <p className='Game-p'>5 873,04 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./ResidentEvil4'> <div className='Game'>
                <img alt='no' src={ResidentEvil4} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>Resident Evil 4 Remake</h1>
                <p className='Game-p'>4 999,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./Atomic-Heart'> <div className='Game'>
                <img alt='no' src={AH} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>Atomic Heart</h1>
                <p className='Game-p'>2 499,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./TLOU'> <div className='Game'>
                <img alt='no' src={TheLustOfUs} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>The Lust Of Us Remaster</h1>
                <p className='Game-p'>4 999,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./EldenRing'> <div className='Game'>
                <img alt='no' src={EldenRing2} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>Elden Ring</h1>
                <p className='Game-p'>3 499,99 ₽</p>
              </div>
              </NavLink>
             
            </div>
            <div class="box-2">
   <h1 class="glitch-2">Скоро</h1>
</div>
<hr className='hr'></hr>
<div className='Games'>

             <NavLink to='./Hades2'> <div className='Game'>
                <img alt='no' src={Hades2} ></img>
                <p className='Game-text'>ПРЕДЗАКАЗ</p>
                <h1> Hades II </h1>
                <p className='Game-p'>TBD</p>
              </div>
              </NavLink>
              <NavLink to='./AC-Mirage'> <div className='Game'>
                <img alt='no' src={ASMirage} ></img>
                <p className='Game-text'>ПРЕДЗАКАЗ</p>
                <h1>Assassins Creed: Mirage</h1>
                <p className='Game-p'>5 949,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./Starfield'> <div className='Game'>
                <img alt='no' src={StarField} ></img>
                <p className='Game-text'>ПРЕДЗАКАЗ</p>
                <h1>Starfield</h1>
                <p className='Game-p'>5 949,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./MortalKombat1'> <div className='Game'>
                <img alt='no' src={MK1} ></img>
                <p className='Game-text'>ПРЕДЗАКАЗ</p>
                <h1>Mortal Kombat 1</h1>
                <p className='Game-p'>5 949,99 ₽</p>
              </div>
              </NavLink>
              <NavLink> <div className='Game'>
                <img alt='no' src={LordsFallen} ></img>
                <p className='Game-text'>ПРЕДЗАКАЗ</p>
                <h1>Lords Of The Fallen</h1>
                <p className='Game-p'>5 949,99 ₽</p>
              </div>
              </NavLink>
             
            </div>
            <div class="box-1">
   <h1 class="glitch-1">Открытые миры</h1>
</div>
<hr className='hr'></hr>
<div className='Games'>

             <NavLink> <div className='Game'>
                <img alt='no' src={Skyrim} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1> The Elder Scrolls: Skyrim </h1>
                <p className='Game-p'>499,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./TheWithcer3'> <div className='Game'>
                <img alt='no' src={Witcher3} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>The Witcher 3: Wild Hunt</h1>
                <p className='Game-p'>499,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./Cyberpunk2077'> <div className='Game'>
                <img alt='alt' src={Cyberpunk2077} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>Cyberpunk 2077</h1>
                <p className='Game-p'>1 499,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./RDR2'> <div className='Game'>
                <img alt='no' src={RedDead2} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>Red Dead Redemption 2</h1>
                <p className='Game-p'>2 499,99 ₽</p>
              </div>
              </NavLink>
              <NavLink to='./GodOfWar'> <div className='Game'>
                <img alt='no' src={GOW} ></img>
                <p className='Game-text'>БАЗОВАЯ ИГРА</p>
                <h1>God of War</h1>
                <p className='Game-p'>1 999,99 ₽</p>
              </div>
              </NavLink>
             
            </div>
        </main>
        
        </>
    );
}
export default Main;

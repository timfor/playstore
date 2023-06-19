import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'
import logo from '../assets/images/logo.png'
const Layout = () => {
    return (
        <>
        <header>
        <div className='header-elements-left'>
        <img alt='no' src={logo} className='logo-img'></img>
        <p className='header-name'>PlayStore</p>
        </div>
        <div className='header-elements-right'>
         <NavLink><p >Главное</p></NavLink>
         <NavLink><p>Все игры</p></NavLink>
         <NavLink><p>Новости</p></NavLink>
         <input className='search' type="search" placeholder="Поиск..."></input>
        </div>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        </>
     );
 }
 export default Layout;
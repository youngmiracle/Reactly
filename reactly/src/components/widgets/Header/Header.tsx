import './header.css'
import { Link, Outlet } from 'react-router-dom';
import Images from '../../../types/photo';
import { useState, useContext } from 'react';
import { useLinkContext } from '../../../types/LinkContext';
import { LinkContextType } from '../../../types/LinkContext';
import ButtonNavigate from '../../shared/Button/ButtonNavigate/ButtonNavigate';

const Header = () => {
    const [scrollClass, setScrollClass] = useState <string>(""); //state на скролл
    
    //скрипт для скролла, когда скроллится до определённых px появляется background.
    window.addEventListener('scroll', () => {
        const scroll: number = window.scrollY;
        if(scroll >= 100){
            setScrollClass("headerScroll");
        }else{
            setScrollClass("headerScrollBack");
        }
      }
    ); 
    
    const nameLinki = useLinkContext(); //Получаем глобальное состояние, в котором хранится класс для кнопки
   
    return(
    <>
        <header className={scrollClass}>
            <nav className='header__nav'>
                <ButtonNavigate btnType='Link' className={nameLinki.nameLink == "Home" ? "header__link header__linkActive" : "header__link"} to="/" nameLink="Home">Главная</ButtonNavigate>
                <ButtonNavigate btnType='Link' className={nameLinki.nameLink == 'OilSearch' ? "header__link header__linkActive" : "header__link"} to="/OilSearch" nameLink="OilSearch">Подбор масла</ButtonNavigate>
                <img src={Images.logoImg} alt="Logo" className='header__logo'/>
                <ButtonNavigate btnType='Link' className={nameLinki.nameLink == 'Products' ? "header__link header__linkActive" : "header__link"} nameLink="Products" to="/Products">Продукция</ButtonNavigate>
                <ButtonNavigate btnType='Link' className={nameLinki.nameLink == "Contacts" ? "header__link header__linkActive" : "header__link"} nameLink="Contacts" to="/Contacts">Контакты</ButtonNavigate>
            </nav> 
        </header>
        <Outlet/>
    </>
    )
}

export default Header;
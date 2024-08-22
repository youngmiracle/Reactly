import './header.css'
import { Link, Outlet } from 'react-router-dom';
import Images from '../../../types/photo';
import { useState, useContext } from 'react';
import { useLinkContext } from '../../../types/LinkContext';
import { LinkContextType } from '../../../types/LinkContext';

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
    const { setNameLink }: any = useLinkContext()
    
    
    //Функция, которая принимает название страницы, обновляет ключ в ssesionStorage и меняет глобальное состояние
    const onClickClassChangeLink = function (nameLink: LinkContextType){
        sessionStorage.setItem("linkActiveClass", nameLink);
        setNameLink(nameLink);
    };

    const LinkClass: string = "header__link";
    const LinkActiveClass: string = "header__link header__linkActive";
    
    return(
    <>
        <header className={scrollClass}>
            <nav className='header__nav'>
                <Link className={nameLinki.nameLink == "Home" ? LinkActiveClass : LinkClass} to="/" onClick={() => onClickClassChangeLink("Home")}>Главная</Link>
                <Link className={nameLinki.nameLink == 'OilSearch' ? LinkActiveClass : LinkClass} to="/OilSearch" onClick={() => onClickClassChangeLink("OilSearch")}>Подбор масла</Link>
                <img src={Images.logoImg} alt="Logo" className='header__logo'/>
                <Link className={nameLinki.nameLink == 'Products' ? LinkActiveClass : LinkClass} onClick={() => onClickClassChangeLink("Products")} to="/Products">Продукция</Link>
                <Link className={nameLinki.nameLink == "Contacts" ? LinkActiveClass : LinkClass} onClick={() => onClickClassChangeLink("Contacts")} to="/Contacts">Контакты</Link>
            </nav> 
        </header>
        <Outlet/>
    </>
    )
}

export default Header;
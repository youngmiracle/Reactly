import './buttonNavigate.css'
import { Link, Outlet } from 'react-router-dom';
import { useLinkContext } from '../../../../types/LinkContext';
import { LinkContextType } from '../../../../types/LinkContext';
interface ButtonNavigateProps {
    to?: string,
    className: string,
    onClick?: any,
    nameLink?: any,
    children: string,
    btnType: "Link" | "button";
    width?: string
}



const ButtonNavigate = ({to, className, nameLink, children, btnType, width}: ButtonNavigateProps) => {
    const nameLinki = useLinkContext(); //Получаем глобальное состояние, в котором хранится класс для кнопки
    const { setNameLink }: any = useLinkContext()
    
    //Функция, которая принимает название страницы, обновляет ключ в ssesionStorage и меняет глобальное состояние
    const onClickClassChangeLink = function (nameLink: LinkContextType){
        sessionStorage.setItem("linkActiveClass", nameLink);
        setNameLink(nameLink);
    };

    return(
        <>
        
        {btnType == "Link" ? 
            <Link to={`${to}`} style={{width: `${width}`}} className={className} onClick={() => onClickClassChangeLink(nameLink)}>{children}</Link> :
            <button style={{width: `${width}`}} className={className}>{children}</button>
        }
        
        
        </>
        
    )
}

export default ButtonNavigate;


import ButtonNavigate from '../../shared/Button/ButtonNavigate/ButtonNavigate';
import './footer.css'
import { useLinkContext } from '../../../types/LinkContext';
import ImageClick from '../../shared/Button/ImageClick/ImageClick';

const Footer = () => {
    const nameLinki = useLinkContext(); //Получаем глобальное состояние, в котором хранится класс для кнопки
    return(
        <footer>
            <article className='footer__navBlock'>
                <aside className='navBlock__hotLine'>
                    <img src={require("../../assets/images/logo.png")} className='hotLine__logo' alt="логотип реактли" />
                    <section className='hotLine__aside'>
                        <h3 className='hotLine__title'>Горячая линия:</h3>
                        <p>+7 (914) 521-48-63</p>
                        <p className='hotLine__description'>Бесплатный звонок по РФ, 24/7</p>
                    </section>
                </aside>
                <nav className='navBlock__nav'>
                    <ButtonNavigate btnType='Link' width='50%' className={nameLinki.nameLink == "Home" ? "header__link header__linkActiveFooter" : "header__link"} to="/" nameLink="Home">Главная</ButtonNavigate>
                    <ButtonNavigate btnType='Link' width='50%' className={nameLinki.nameLink == "OilSearch" ? "header__link header__linkActiveFooter" : "header__link"} to="/OilSearch" nameLink="OilSearch">Подбор масла</ButtonNavigate>
                    <ButtonNavigate btnType='Link' width='50%' className={nameLinki.nameLink == "Products" ? "header__link header__linkActiveFooter" : "header__link"} to="/Products" nameLink="Products">Продукция</ButtonNavigate>
                    <ButtonNavigate btnType='Link' width='50%' className={nameLinki.nameLink == "Contacts" ? "header__link header__linkActiveFooter" : "header__link"} to="/Contacts" nameLink="Contacts">Контакты</ButtonNavigate>
                    <ButtonNavigate btnType='button' width='50%' className='header__link'>Принцип производства</ButtonNavigate>
                    <ButtonNavigate btnType='button' width='50%' className='header__link'>О компании</ButtonNavigate>
                    <ButtonNavigate btnType='button' width='50%' className='header__link'>Как нас найти</ButtonNavigate>
                </nav>
            </article>
            <article className='footer__asideInfo'>
                <p>Leventas Innovations Corparation,<br />2020-2024. Все права защищены</p>
                <section className='asideInfo__follow'>
                    <p>Follow us</p>
                    <nav className='asideInfo__nav'>
                        <ImageClick btnType='Link' to="mailto:leventase@mail.ru" src={require("../../assets/images/icons/mailLogo.png")} alt='логотип мэйл почта'/>
                        <ImageClick btnType='Link' to="https://t.me/Hopalliop" src={require("../../assets/images/icons/telegram.png")} alt='логотип телеграмм'/>
                        <ImageClick btnType='Link' to="https://vk.com/okkkdaa" src={require("../../assets/images/icons/vk.png")} alt='логотип вконтакте'/>
                        <ImageClick btnType='Link' to="#" src={require("../../assets/images/icons/inst.png")} alt='логотип инстаграмм'/>
                    </nav>
                </section>
            </article>
        </footer>
    )
}

export default Footer;
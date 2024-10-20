import ButtonDefault from '../../shared/Button/ButtonDefault/ButtonDefault';
import './contactsPage.css';
import ContactsInformationSection from '../../widgets/ContactsInformationSection/ContactsInformationSection'
import photos from '../../../types/photo';

const ContactsPage = () => {
    return(
        <main className='contactsMain'> 
            <article className='contactsMain__asideArticle'>
                <h2 className='asideArticle__title'>КОНТАКТЫ</h2>
                <ContactsInformationSection img={photos.phoneLogo} title="Телефон:" data="8 (914) 522-18-63 (Круглосуточно, без выходных)"/>
                <ContactsInformationSection img={photos.mailLogo} colorData='#9400D3' title="Email:" data="leventasE@reactly.com"/> 
                <aside className='asideArticle__aside'>
                    <h3 className='aside_title'>Юридический адрес:</h3>
                    <p>Россия, 654776, г.Чита, мк-р Южный, дом 13, офис 40.</p>
                </aside>
                <aside className='asideArticle__aside'>
                    <h3 className='aside_title'>Часы работы:</h3>
                    <p>ПН-ПТ: 9:00-20:00<br />СБ-ВС: выходной</p>
                </aside>
            </article>
            <article className='contactsMain__menuArticle'>
                <form className='menuArticle__form'>
                    <input type="text" className='menuArticle__input' placeholder='ФИО*'/>
                    <input type="tel" className='menuArticle__input' placeholder='Ваш телефон*'/>
                    <input type="email" className='menuArticle__input' placeholder='Ваш e-mail*'/>
                    <section className="radioInputSection">
                        <input type="checkbox" className='radioInputSection__input'/>
                        <p>Нажимая на кнопку, я принимаю условия политики конфиденциальности<span style={{color:"purple"}}>*</span></p>
                    </section>
                </form>
                <button className='menuArticle__btn'>Отправить</button>
            </article>
        </main>
    )
}

export default ContactsPage;
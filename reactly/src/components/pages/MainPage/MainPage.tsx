import './mainPage.css'
import Images from '../../../types/photo'
import { Link } from 'react-router-dom'
import { useLinkContext } from '../../../types/LinkContext'
import { LinkContextType } from '../../../types/LinkContext';
import ButtonDefault from '../../shared/Button/ButtonDefault/ButtonDefault'
import PromotionSection from '../../widgets/PromotionSection/PromotionSection';
import InfoSection from '../../widgets/InfoSection/InfoSection';
import PromotionSectionSecond from '../../widgets/PromotionSection/PromotionSectionSecond';
import InfoSectionSecond from '../../widgets/InfoSection/InfoSectionSecond';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {

    //обращаясь к глобальному контексту, меняю стиль кнопке Products
    const { setNameLink }: any = useLinkContext() 
    
    const onClickClassChangeLink = function (nameLink: LinkContextType){
        sessionStorage.setItem("linkActiveClass", nameLink)
        setNameLink(nameLink);
    };
    const [appState, setAppState] = useState<any>([]);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:3500/api/type';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

    return(
        <main>
            <article className='homePage__mainContent'>
                <img src={Images.homePhoneOne} alt="Phone" className='mainContentHome__imgPhon'/>
                <section className='mainContentHome__contentSection'>
                    <article className='contentSectionHome__info'>
                        <h3 className='infoHome__title'>Лучшая дальневосточная<br />автомобильная продукция </h3>   
                        <p className='infoHome__other'>Для самых требовательных и<br />закалённых водителей</p>
                    </article>
                    <section className='contentSectionHome__promotion'>
                        <img src={Images.imageShadowQuote} alt="#" className='promotionHome__img'/>
                        <Link to="Products" onClick={() => onClickClassChangeLink("Products")}><ButtonDefault position="relative" top='0%' height='50%' width='10 0%' left='25%'>Выбрать товар</ButtonDefault></Link>
                    </section>
                </section>
            </article>
            <div className="slideBlock"></div>
            <PromotionSection/>
            <InfoSection/>
            <PromotionSectionSecond/>
            <InfoSectionSecond/>
        </main>
    )
}

export default MainPage;
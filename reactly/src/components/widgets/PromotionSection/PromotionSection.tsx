import Images from '../../../types/photo'
import ButtonDefault from '../../shared/Button/ButtonDefault/ButtonDefault'
import { Link } from 'react-router-dom'

const PromotionSection = () => {
    return(
        <article className='homePage__promotionSection'>
            <section className='promotionSection__titleSection'>
                <h2>Защита вашего двигателя</h2>
                <p className='promotionSection__titleText'><strong style={{color: "#9400D3", fontSize: "3vh"}}>100%</strong> качество</p>
            </section>
            <section className='promotionSection__content'>
                <aside className='promotionSection__info'>
                Производство масел <strong style={{fontWeight: 700, color: "#9400D3"}}>REACTLY</strong> многоступенчатый процесс, где контролируется каждый этап от разработки рецептуры до передачи готового продукта клиенту.
                </aside>
                <section className='promotionSection__contentNav'>
                    <nav className='promotionSection_nav'>
                        <Link to="OilSearch"><ButtonDefault width='150%' height='70%'>Подбор масла</ButtonDefault></Link>
                        <Link to="Products"><ButtonDefault classNameSecond='True' width='150%' height='70%'>Купить масло</ButtonDefault></Link>
                    </nav>
                    <img src={Images.promotionBoard} alt="promotionImage" className='promotionSection_img'/>
                </section>
            </section>
        </article>
    )
}

export default PromotionSection;
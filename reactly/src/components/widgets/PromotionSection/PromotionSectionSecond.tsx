import Images from '../../../types/photo'
import ButtonDefault from '../../shared/Button/ButtonDefault/ButtonDefault'
import { Link } from 'react-router-dom'

const PromotionSectionSecond = () => {
    return(
        <article className='homePage__promotionSectionSecond'>
            <section className='promotionSectionSecond__cardList'>
                <div className="cardList__cardExample">
                    <img src={Images.promotionOne} alt="image" className='cardExample__img'/>
                    <Link to="/Products/MotorOil/sae_0w_16_" className='cardExample__Link'/>
                </div>
                <div className="cardList__cardExample cardList__cardExampleCenter">
                    <img src={Images.promotionOne} alt="image" className='cardExample__img'/>
                    <Link to="/Products/MotorOil/sae_0w_16_" className='cardExample__Link'/>
                </div>
                <div className="cardList__cardExample">
                    <img src={Images.promotionOne} alt="image" className='cardExample__img'/>
                    <Link to="/Products/MotorOil/sae_0w_16_" className='cardExample__Link'/>
                </div>
            </section>
            <Link className='promotionSectionSecond__Link' to="Products">Купить</Link>
            <h2 className="promotionSectionSecond__title">Нам можно доверять</h2>
        </article>
    )
}

export default PromotionSectionSecond;
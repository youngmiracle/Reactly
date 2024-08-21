import Images from '../../../types/photo';

const InfoSectionSecond = () => {
    return(
        <article className='homePage__infoSection' style={{alignItems: "start", flexDirection: "row-reverse"}}>
            <section className='infoSection__imgSection'>
                <img src={Images.InfoImagesSecond} alt="Info Images" className='infoSection__img'/>
            </section>
            <aside className='infoSection__textContent' style={{marginLeft: "0", marginRight: "5%"}}>
                <h3 className='infoSection__title'>О КОМПАНИИ</h3>
                <p className="infoSection__list" style={{margin: "5% 10% 0 0% "}}><strong style={{color: "#910DC4"}}>Reactly</strong> ‒ российская компания, головной офис которой расположен в Забайкальском крае в Чите. Деятельность компании направлена на разработку и внедрение решений в области смазочных материалов и охлаждающих жидкостей, создание, выпуск и реализацию продукции, отвечающей требованиям новейших стандартов автопроизводителей. Большую популярность имеет за счёт продукции предназначенной для дальнего востока, под его климат и дороги. В результате «умная» формула адаптируется и обеспечивает двигателю, коробки передач максимальную защиту в любых условиях эксплуатации и при всех режимах работы в разный климат.</p>
            </aside>
        </article>
    )
}

export default InfoSectionSecond;
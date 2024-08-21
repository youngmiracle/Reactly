import Images from '../../../types/photo';

const InfoSection = () => {
    return(
        <article className='homePage__infoSection'>
            <section className='infoSection__imgSection'>
                <img src={Images.InfoImagesFirst} alt="Info Images" className='infoSection__img'/>
            </section>
            <aside className='infoSection__textContent'>
                <h3 className='infoSection__title'>Принцип производства REACTLY</h3>
                <ol type="I" className="infoSection__list">
                    <li>Контроль поступающего сырья и комплектующих (входной контроль)</li>
                    <li>Контроль на стадии приготовления продукта (блендинг)</li>
                    <li>Контроль качества приготовленного продукта (лабораторные тесты)</li>
                    <li>Контроль на этапе производства всех видов тары</li>
                    <li>Контроль на этапе розлива в потребительскую тару (фасовка)</li>
                    <li>Контроль на этапе хранения готовой продукции на логистических складах</li>
                    <li>Контроль на этапе отгрузки готовой продукции потребителю</li>
                </ol>
            </aside>
        </article>
    )
}

export default InfoSection;
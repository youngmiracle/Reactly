import './productsPage.css';
import { ProductAssortments } from '../../../types/ProductAssortments';
import { Link } from "react-router-dom";
import AssortmentCard from "../../widgets/AssortmentCard/AssortmentCard";
import { useLinkContext } from '../../../types/LinkContext'
import { LinkContextType } from '../../../types/LinkContext';
import Images from '../../../types/photo';
import ReactItemPhon from '../../shared/ReactItemPhon/ReactItemPhon';

const ProductsPage = () => {
    
    //обращаясь к глобальному контексту, меняю стиль кнопке Products
    const { setNameLink }: any = useLinkContext() 
    const onClickClassChangeLink = function (nameLink: string){
        sessionStorage.setItem("linkActiveClass", nameLink)
        setNameLink(nameLink);
    };  

    return(
        <main className='productsMain'>
            <h1 className='productsPage__title'>Каталог продукции <strong style={{color: "#9400D3"}}>Reactly</strong></h1>
            <section className='productsPage__assortments'>
            {ProductAssortments.map((product) => {
                return (
                    <AssortmentCard key={product.id} 
                    id={product.id} 
                    srcLogo={product.logoImg}
                    altLogo={product.titleEng}
                    srcItem={product.imageItem}
                    altItem={product.titleEng}
                    titleEng={product.titleEng}
                    titleRus={product.titleRus}
                    linkName={product.linkName}
                    to={product.linkName}
                    onClick={() => onClickClassChangeLink(product.linkName)}
                    />
                )
            })}
            </section>
        </main>
    )
}

export default ProductsPage;
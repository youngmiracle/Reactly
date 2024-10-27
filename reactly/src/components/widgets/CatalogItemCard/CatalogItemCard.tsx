import ButtonCatalog from '../../shared/Button/ButtonCatalog/ButtonCatalog';
import './catalogItemCard.css'

interface CatalogItemCardProps{
    productImage: string,
    productName: string,
    productType: string,
    productSAE: string,
    productAPI: string,
    productILSAC: string,
    productSize: any,//number[],
    id_productSize: number,
    productPrice: number
}


const CatalogItemCard = ({productImage, productName, productType, productSAE, productAPI, 
    productILSAC, productSize, id_productSize, productPrice}: CatalogItemCardProps) => {

        const buttonClickDetails = () =>{
            try{
                const storageLinkValue = sessionStorage.getItem("linkActiveClass");
                sessionStorage.setItem("linkActiveClass", `${storageLinkValue}/${productName}`);
            }catch (err){
                alert(`Ошибка с переходом ${err}`);
            }   
        }

    return(
        <section>
            <img src={productImage} alt="Картинка продукта" />
            <h3>Моторное масло Reactly {productName}</h3>
            <ul>
                <li>Виды фасовок: {productSize.map((size: any) => 
                    {return(<span key={id_productSize}>{size}л</span>)}
                )}</li> {/* product_size table */}
                <li>Цена: {productPrice}</li> {/* product_size table */}
                <li>Тип: {productType}</li>
                <li>Вязкость по SAE: {productSAE}</li>
                <li>API {productAPI}, ILSAC {productILSAC}</li>
            </ul>
            <ButtonCatalog Children="Подробнее" onClick={() => buttonClickDetails()}/>
        </section>
    )
}

export default CatalogItemCard;
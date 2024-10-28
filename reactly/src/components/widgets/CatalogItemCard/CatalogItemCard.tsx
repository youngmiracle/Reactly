import { useState } from 'react';
import ButtonCatalog from '../../shared/Button/ButtonCatalog/ButtonCatalog';
import './catalogItemCard.css'

interface CatalogItemCardProps{
    productImage: string,
    productName: string,
    productType?: string,
    productSAE?: string,
    productAPI?: string,
    productILSAC?: string,
    productSize: any,//number[],
    id_productSize?: number,
    productPrice: any,
    productInfo?: string | any
}


const CatalogItemCard = ({productImage, productName, productInfo, productSize, productPrice}: CatalogItemCardProps) => {
        const [a, setA] = useState<any>([])


        const buttonClickDetails = () =>{
            try{
                const storageLinkValue = sessionStorage.getItem("linkActiveClass");
                sessionStorage.setItem("linkActiveClass", `${storageLinkValue}/${productName}`);
            }catch (err){
                alert(`Ошибка с переходом ${err}`);
            }   
        }

        
    return(
        <section className='catalogItemCard'>
            <img src={productImage} alt="Картинка продукта" className='catalogItemCard__img' style={{width: "100px", height: "100px"}}/>
            <h3 className='catalogItemCard__title'>Моторное масло Reactly {productName}</h3>
            <ul className='catalogItemCard__List'>
                <li>Виды фасовок: {productSize.map((size: any) => 
                    {return(<span key={size.id_product_size}>{size.size}л</span>)}
                )}</li> {/* product_size table */}
                <li>Цена: {Math.min(...productPrice.map((e: any) => e.price))}</li> {/* product_size table */}
                <li>Тип: {productInfo.map((info: any) => { return(info.title == "type" ? info.description : "")})}</li>
                <li>Вязкость по SAE: {productInfo.map((info: any) => { return(info.title == "SAE" ? info.description : "")})}</li>
                <li>API {productInfo.map((info: any) => { return(info.title == "API" ? info.description : "")})}, 
                    {productInfo.map((info: any) => { return(info.title == "ILSAC" ? ` ILSAC ${info.description}` : "")})}
                    {productInfo.map((info: any) => { return(info.title == "ACEA" ? `ACEA ${info.description}` : "")})}
                </li>
               </ul>
               <br />
            <ButtonCatalog Children="Подробнее" onClick={() => buttonClickDetails()}/>
        </section>
    )
}

export default CatalogItemCard;
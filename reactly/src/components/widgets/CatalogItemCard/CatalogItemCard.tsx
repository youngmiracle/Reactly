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
    productSize: any,
    id_productSize?: number,
    productPrice: any,
    productInfo?: any
}


const CatalogItemCard = ({productImage, productName, productInfo, productSize, productPrice}: CatalogItemCardProps) => {

        const buttonClickDetails = () =>{
            try{
                const storageLinkValue = sessionStorage.getItem("linkActiveClass");
                sessionStorage.setItem("linkActiveClass", `${storageLinkValue}/${productName}`);
            }catch (err){
                alert(`Ошибка с переходом ${err}`);
            }   
        }

        const convertDollar = (): number =>{
            const rub = Math.min(...productPrice.map((e: any) => e.price));
            const result = rub / 97.52;
            
            return Number(result.toFixed(2))
        }

        const nameLinkSession: any = sessionStorage.getItem("linkActiveClass"); //Получаем значение из sessionstorage и храним там какая страница и с каким маслом открыта
    return(
        <section className='catalogItemCard'>
            <img src={productImage} alt="Картинка продукта" className='catalogItemCard__img' style={{width: "100px", height: "100px"}}/>
            <h3 className='catalogItemCard__title'>{"MotorOil" == nameLinkSession ? "Моторное масло" : ""}{"TransmissionOil" == nameLinkSession ? "Трансимссионное масло" : ""}{"CommercialOil" == nameLinkSession ? "Коммерческое масло" : ""}{"Antifreeze" == nameLinkSession ? "Антифриз" : ""} {productName}</h3>
            <ul className='catalogItemCard__List'>
                <li>Виды фасовок: {productSize.map((size: any) => 
                    {return(<span className='list__size' key={size.id_product_size}>{size.size}л</span>)}
                )}</li> {/* product_size table */}
                
                <li>Цена: от <strong className="textStrong">{Math.min(...productPrice.map((e: any) => e.price))}<span style={{fontSize: "1.3vh"}}>&#8381;</span> / {convertDollar()}$</strong></li> {/* product_size table */}
                
                <li>Тип: <strong className='textStrong'>{productInfo.map((info: any) => { return (info.title == "type" ? info.description : "")})}</strong></li>

                {productInfo.map((info: any) => { 
                    return (
                       <>
                        {info.title == "SAE" ? 
                        <li>Вязкость по SAE: <strong className='textStrong'>{info.description}</strong></li>
                            : 
                        ""}
                        </> 
                    )
                })}
                <li>Спецификация:&nbsp;
                    {productInfo.map((info: any) => { 
                        return (                
                            <strong className='textStrong'>
                            {info.title == "API" ? 
                                <span>API: {info.description}</span>
                            : 
                            ""}
                            {info.title == "ILSAC" ? 
                                <span><span style={{color: "#dbcbc3"}}>,</span> ILSAC: {info.description}</span>
                            : 
                            ""}
                            {info.title == "API" ? 
                                <span><span style={{color: "#dbcbc3"}}>,</span> ACEA: {info.description}</span>
                            : 
                            ""}
                            </strong>
                            )
                    })}
                </li>

                
               
               </ul>
               <br />
            <ButtonCatalog width='70%' Children="Купить" onClick={() => buttonClickDetails()}/>
        </section>
    )
}

export default CatalogItemCard;
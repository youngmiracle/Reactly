import './catalogItemPage.css'
import { LinkContext, useLinkContext } from '../../../types/LinkContext';
import { ProductAssortments } from '../../../types/ProductAssortments';
import PropertySorting from '../../widgets/PropertySorting/PropertySorting'
import NotFoundPage from '../FoundPage/NotFoundPage';
import { MotorOilData } from '../../../types/MotorOilData';
import { TransmissionOilData } from '../../../types/TransmissionOilData';
import { CommercialOilData } from '../../../types/CommercialOilData';
import api from '../../api/axios';
import { useEffect, useState } from 'react';
import CatalogItemCard from '../../widgets/CatalogItemCard/CatalogItemCard';


const CatalogItemPage = () => {
    const nameLinkSession: any = sessionStorage.getItem("linkActiveClass");

    const [product, setProduct] = useState<any>([]);
  
    useEffect(() => {
        try{
            const ProductsShow = async () => {
                const MotorOilApiResponse = await api.get("api/product?id_type=1");
                const TransmissionOilApiResponse = await api.get("api/product?id_type=2");
                const CommercialOilApiResponse = await api.get("api/product?id_type=4");
                switch(sessionStorage.getItem("linkActiveClass")){
                    case "MotorOil":
                        setProduct(MotorOilApiResponse.data.rows);
                        console.log(MotorOilApiResponse.data.rows)
                        break;
                    case "TransmissionOil":
                        setProduct(TransmissionOilApiResponse.data.rows);
                        break;
                    case "CommercialOil":
                        setProduct(CommercialOilApiResponse.data.rows);
                        break;
                    default: 
                        alert("Antifreeze");
                }
            }
            ProductsShow()
        }catch (err){
            alert(err)
        }
    }, [])
  
    return(
        <main className='catalogItemPage'>
            {"MotorOil" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            {"TransmissionOil" == nameLinkSession ?  <PropertySorting generalProps={TransmissionOilData}/> : <></>}
            {"CommercialOil" == nameLinkSession ?  <PropertySorting generalProps={CommercialOilData}/> : <></>}
            {"Antifreeze" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            <article className='catalogItemPage__productsContent'>
              <h2 className='productsContent__title'>{"MotorOil" == nameLinkSession ? "Моторные масла" : ""}{"TransmissionOil" == nameLinkSession ? "Трансимссионые масла" : ""}{"CommercialOil" == nameLinkSession ? "Коммерческие масла" : ""}{"Antifreeze" == nameLinkSession ? "Антифризы" : ""}</h2>
              <article className='productsContent__itemCatalog'>
                {product.map((props: any) => {
                return(
                    <CatalogItemCard key={props.id_product} productImage={props.img} 
                    productName={props.name} productSize={props.product_sizes} productPrice={props.product_sizes} 
                    productInfo={props.product_infos}/>
                )
              })}
              </article>
            </article>
        </main>
    )
}

export default CatalogItemPage;
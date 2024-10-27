import './catalogItemPage.css'
import { LinkContext, useLinkContext } from '../../../types/LinkContext';
import { ProductAssortments } from '../../../types/ProductAssortments';
import PropertySorting from '../../widgets/PropertySorting/PropertySorting'
import NotFoundPage from '../FoundPage/NotFoundPage';
import { MotorOilData } from '../../../types/MotorOilData';
import api from '../../api/axios';
import { useEffect, useState } from 'react';
import CatalogItemCard from '../../widgets/CatalogItemCard/CatalogItemCard';

const CatalogItemPage = () => {
    const nameLinkSession: any = sessionStorage.getItem("linkActiveClass");

    const [product, setProduct] = useState<any>([]);
    const [productInfo, setProductInfo] = useState<any>([]);
    const [productSize, setProductSize] = useState<any>([]);
  
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
        <main>
            {"MotorOil" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            {"TransmissionOil" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            {"CommercialOil" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            {"Antifreeze" == nameLinkSession ?  <PropertySorting generalProps={MotorOilData}/> : <></>}
            <article>
              <h2>{"MotorOil" == nameLinkSession ? "Моторные масла" : ""}</h2>
              <h2>{"TransmissionOil" == nameLinkSession ? "Трансимссионые масла" : ""}</h2>
              <h2>{"CommercialOil" == nameLinkSession ? "Коммерческие масла" : ""}</h2>
              <h2>{"Antifreeze" == nameLinkSession ? "Антифризы" : ""}</h2>
              <article>
                {/* {product.map((props: any) => {
                return(
                    {}
                    <CatalogItemCard key={props.id_product} productImage={props}/>
                )
              })} */}
              </article>
              
            </article>
        </main>
    )
}

export default CatalogItemPage;
import './catalogItemPage.css';
import { LinkContext, useLinkContext } from '../../../types/LinkContext';
import { ProductAssortments } from '../../../types/ProductAssortments';
import TypeCatalog from '../../widgets/TypeCatalog/ SortingСolumn'
import NotFoundPage from '../FoundPage/NotFoundPage';
import { MotorOilData } from '../../../types/MotorOilData';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CatalogItemPage = () => {
    const nameLinkSession: any = sessionStorage.getItem("linkActiveClass");

    const [typeState, setTypeState] = useState<any>([]);
    // console.log(typeState)
    useEffect(() => {
      const apiUrl = 'http://localhost:3500/api/product?id_type=2';
      axios.get(apiUrl).then((resp) => {
        const type = resp.data.rows;
        setTypeState(type); 
        // console.log('всё ок')
      }).catch((err) => {
        // console.log("ошбика")
      });
    }, [setTypeState]);
  
    return(
        <main>
            {typeState.map((type: any) => {
                return(
                    <section key={type.id_product}>
                        <img  src={type.img} alt=""  style={{width: "100px", height: "100px "}}/>
                        <p>{type.id_product}</p>
                    </section>
                    
                )
            }
            )}
            {"MotorOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData }/> : <></>}
            {"TransmissionOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"CommercialOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"Antifreeze" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            
        </main>
    )
}

export default CatalogItemPage;
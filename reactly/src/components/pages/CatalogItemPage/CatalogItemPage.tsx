import './catalogItemPage.css'
import { LinkContext, useLinkContext } from '../../../types/LinkContext';
import { ProductAssortments } from '../../../types/ProductAssortments';
import TypeCatalog from '../../widgets/TypeCatalog/TypeCatalog'
import NotFoundPage from '../FoundPage/NotFoundPage';
import { MotorOilData } from '../../../types/MotorOilData';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CatalogItemPage = () => {
    const nameLinkSession: any = sessionStorage.getItem("linkActiveClass");

    const [typeState, setTypeState] = useState<any>([]);
  
    useEffect(() => {
      const apiUrl = 'http://localhost:3500/api/product?id_type=1';
      axios.get(apiUrl).then((resp) => {
        const type = resp.data;
        setTypeState(type);
        console.log(typeState)
      }).catch((err) => {
        console.log(typeState)
      });
    }, [setTypeState]);
  
    return(
        <main>
            {"MotorOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData }/> : <></>}
            {"TransmissionOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"CommercialOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"Antifreeze" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {typeState}
        </main>
    )
}

export default CatalogItemPage;
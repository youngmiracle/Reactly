import './catalogItemPage.css'
import { LinkContext, useLinkContext } from '../../../types/LinkContext';
import { ProductAssortments } from '../../../types/ProductAssortments';
import TypeCatalog from '../../widgets/TypeCatalog/TypeCatalog'
import NotFoundPage from '../FoundPage/NotFoundPage';
import { MotorOilData } from '../../../types/MotorOilData';

const CatalogItemPage = () => {
    


    const nameLinkSession: any = sessionStorage.getItem("linkActiveClass");

    return(
        <main style={{color: "white"}}>
            {"MotorOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"TransmissionOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"CommercialOil" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
            {"Antifreeze" == nameLinkSession ?  <TypeCatalog generalProps={MotorOilData}/> : <></>}
        </main>
    )
}

export default CatalogItemPage;
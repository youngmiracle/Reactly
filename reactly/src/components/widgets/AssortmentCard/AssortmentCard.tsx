import './assortmentCard.css';
import { Link } from "react-router-dom";


interface AssortmentCardProps{
    id: number,
    srcLogo: string,
    altLogo: string,
    srcItem: string,
    altItem: string,
    titleEng: string,
    titleRus: string,
    linkName: "MotorOil" | "TransmissionOil" | "CommercialOil" | "Antifreeze" | any,
    onClick?: any,
    to: any
}

const AssortmentCard = ({id, srcLogo, altLogo, srcItem, altItem, titleEng, titleRus, linkName, onClick, to}: AssortmentCardProps) => {
    
    

    return(
        <article className='assortmentCard' key={id}>
            <div className="assortmentCard__info">
                <img src={srcLogo} alt={`${altLogo} logo`} className='assortmentCard__imgLogo'/>
                <img src={srcItem} alt={`${altItem} item`} className='assortmentCard__imgItem'/>
                <p className='assortmentCard__titleEng'>{titleEng}</p>
            </div>
            <div className="assortmentCard__tabTitle">
                <p className='assortmentCard__titleRus'>{titleRus}</p>
            </div>
            <Link to={to} onClick={onClick} className='assortmentCard__link'></Link>
        </article>
    )
}

export default AssortmentCard;
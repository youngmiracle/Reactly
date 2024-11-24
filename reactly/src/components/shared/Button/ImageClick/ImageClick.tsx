import './imageClick.css'
import { Link } from 'react-router-dom'

interface ImageClickProps{
    src?: any,
    btnType: "button" | "Link",
    to: any,
    alt: string,
    onClick?: any
}

const ImageClick = ({src, btnType, to, alt, onClick}: ImageClickProps) => {
    return(
        <section className='imageClick__section'>
            {
                btnType == "Link" ?
                <>
                    <Link className='imageClick__link' to={to}></Link>
                    <img className='imageClick__img' src={src} alt={alt} />
                </> :
                <>
                    <button onClick={onClick} className='imageClick__link'></button>
                    <img src={src} alt={alt} className='imageClick__img'/>
                </>
            }
        </section>
    )
}

export default ImageClick;
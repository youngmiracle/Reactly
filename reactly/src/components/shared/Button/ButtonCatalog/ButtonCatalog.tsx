import { Children } from 'react';
import './buttonCatalog.css'

interface ButtonCatalogProps{
    onClick: any,
    Children: any,
    type?: any,
    width?: string,
    height?: string
}


const ButtonCatalog = ({onClick, Children, type, width, height}: ButtonCatalogProps) => {

    return(
        <button 
        onClick={onClick}
        type={type} 
        className='buttonCatalog'
        style={{width: `${width}`, height: `${height}`}}>
            {Children}
        </button>
    )
}

export default ButtonCatalog;
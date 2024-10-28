import { Children } from 'react';
import './buttonCatalog.css'

interface ButtonCatalogProps{
    onClick: any,
    Children: any,
    type?: any,
}


const ButtonCatalog = ({onClick, Children, type}: ButtonCatalogProps) => {

    return(
        <button 
        onClick={onClick}
        type={type}>
            {Children}
        </button>
    )
}

export default ButtonCatalog;
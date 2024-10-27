import { Children } from 'react';
import './buttonCatalog.css'

interface ButtonCatalogProps{
    onClick: any,
    Children: any
}


const ButtonCatalog = ({onClick, Children}: ButtonCatalogProps) => {

    return(
        <button onClick={onClick}>
            {Children}
        </button>
    )
}

export default ButtonCatalog;
import './buttonDefault.css'

interface ButtonDefaultProps {
    classNameSecond?: string,
    children: string,
    width?: string,
    height?: string,
    position?: any,
    top?: string,
    left?: string,
}

const ButtonDefault = ({classNameSecond, children, width, height, position, left, top}: ButtonDefaultProps) => {
    return(
        <button 
        className={`buttonDefault buttonDefault${classNameSecond}`}
        style={{
            width: width,
            height: height,
            position: position,
            left: left,
            top: top
        }}>
            {children}
        </button>
    )
}

export default ButtonDefault;
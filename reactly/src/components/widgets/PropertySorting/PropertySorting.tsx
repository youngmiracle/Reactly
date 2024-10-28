import { useState } from 'react'
import './propertySorting.css'
import Photos from '../../../types/photo'
import ButtonCatalog from '../../shared/Button/ButtonCatalog/ButtonCatalog';



const PropertySorting = ({generalProps}: any) => {

    const [arrayChecked, setArrayChecked] = useState<any>([]);
    const checkedInputSort = (props: " " | "type" | "SAE" | "specifical" | null) => {
        try{
            if(!arrayChecked.includes(props)){
                setArrayChecked([...arrayChecked, props])
            }else{
                const a = arrayChecked.filter((type: any) => type !== props);
                setArrayChecked(a)
            }
        }catch{
            alert("Ошибка")
        }   
    }


    return(
        <form className='propertySortingForm'>
            <h2 className='propertySortingForm__title'>Подбор параметров</h2>
            <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Цена</p>
                    <img src={Photos.arrowBtn} alt="#" className='sortBlock__img'/>
                    <button></button>
                </section>
                <section className='sortBlock__valueBlock'>
                    <input type="number" className='valueBlock__input'/>
                    <input type="number" className='valueBlock__input'/>
                </section>
            </section>
            <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Тип</p>
                    <img src={Photos.arrowBtn} alt="#" className='sortBlock__img'/>
                    <button></button>
                </section>
                {generalProps.typeAll.map((props: any) => {
                    return(
                        <p key={props.id}>
                            {props.type}
                            <input type="checkbox" onClick={() => checkedInputSort(props.type)}/>
                        </p>
                    )
                })}
            </section>
            
            <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Вязкость по SAE</p>
                    <img src={Photos.arrowBtn} alt="#" className='sortBlock__img'/>
                    <button></button>
                </section>
                {generalProps.SAEAll.map((props: any) => {
                    return(
                        <p key={props.id}>
                            {props.SAE}
                            <input type="checkbox" onClick={() => checkedInputSort(props.SAE)}/>
                        </p>
                    )
                })}
             </section>
             
             <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Спецификация</p>
                    <img src={Photos.arrowBtn} alt="#" className='sortBlock__img'/>
                    <button></button>
                </section>
                {generalProps.SpecificalAll.map((props: any) => {
                    return(
                        <p key={props.id}>
                            {props.specifical}
                            <input type="checkbox" onClick={() => checkedInputSort(props.specifical)}/>
                        </p>
                    )
                })}
             </section>
            <ButtonCatalog type='button' onClick={() => console.log(arrayChecked)} Children="Показать"/>
            <ButtonCatalog type="reset" onClick={() => setArrayChecked([])} Children="Сбросить"/>
        </form>
        
    )
}

export default PropertySorting;
import { useState } from 'react'
import './propertySorting.css'
import Photos from '../../../types/photo'
import ButtonCatalog from '../../shared/Button/ButtonCatalog/ButtonCatalog';



const PropertySorting = ({generalProps}: any) => {

    const [arrayChecked, setArrayChecked] = useState<any>([]);
    const [arrowActive, setArrowActive] = useState<any>([]);

    const arrowActiveFun = (id: number) => {
        setArrowActive(id)
    } 

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
                    <p>Цена <span className={`${arrowActive == 1 ? "sortBlock__arrow sortBlock__arrowReverse" : "sortBlock__arrow"}`}>^</span></p>
                    <button className='sortBlock__btn' onClick={() => arrowActiveFun(1)} type='button'></button>
                </section>
                <section className='sortBlock__valueBlock'>
                    <input type="number" className='valueBlock__input' placeholder='Мин'/>
                    <input type="number" className='valueBlock__input' placeholder='Макс'/>
                </section>
            </section>
            <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Тип <span className={`sortBlock__arrow ${arrowActive == 2 ? "sortBlock__arrowReverse" : ""}`}>^</span></p>
                    <button className='sortBlock__btn' onClick={() => arrowActiveFun(2)} type='button'></button>
                </section>
                {generalProps.typeAll.map((props: any) => {
                    return(
                        <p key={props.id} className='sortBlock__select'>
                            <input type="checkbox" onClick={() => checkedInputSort(props.type)} className='sortBlock__inputCheckBox'/>
                            &nbsp;
                            {props.type}
                        </p>
                    )
                })}
            </section>
            
            <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Вязкость по SAE <span className={`sortBlock__arrow ${arrowActive == 3 ? "sortBlock__arrowReverse" : ""}`}>^</span></p>
                    <button className='sortBlock__btn' onClick={() => arrowActiveFun(3)} type='button'></button>
                </section>
                {generalProps.SAEAll.map((props: any) => {
                    return(
                        <p key={props.id} className='sortBlock__select'>
                            <input type="checkbox" onClick={() => checkedInputSort(props.SAE)}/>
                            &nbsp;
                            {props.SAE}
                        </p>
                    )
                })}
             </section>
             
             <section className='propertySortingForm__sortBlock'>
                <section className='sortBlock__titleBlock'>
                    <p>Спецификация <span className={`sortBlock__arrow ${arrowActive == 4 ? "sortBlock__arrowReverse" : ""}`}>^</span></p>
                    <button className='sortBlock__btn' onClick={() => arrowActiveFun(4)} type='button'></button>
                </section>
                {generalProps.SpecificalAll.map((props: any) => {
                    return(
                        <p key={props.id} className='sortBlock__select'>
                            <input type="checkbox" onClick={() => checkedInputSort(props.specifical)}/>
                            &nbsp;
                            {props.specifical}
                        </p>
                    )
                })}
             </section>
             <section className='propertySortingForm__btnBlock'>
                <ButtonCatalog type='button' onClick={() => console.log(arrayChecked)} Children="Показать"/>
                <ButtonCatalog type="reset" onClick={() => setArrayChecked([])} Children="Сбросить"/>
             </section>
            </form>
        
    )
}

export default PropertySorting;
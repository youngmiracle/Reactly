import { useState } from 'react'
import './propertySorting.css'




const PropertySorting = ({generalProps}: any) => {
    // const [classNameSell, setArrayChecked] = useState<any>([]);
    // const [arrayChecked, setArrayChecked] = useState<any>([]);
    // const [arrayChecked, setArrayChecked] = useState<any>([]);
    // const [arrayChecked, setArrayChecked] = useState<any>([]);



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
        <form style={{paddingTop: "10vh"}}>
            <h2>Подбор параметров</h2>
            
            <section>
                <section>
                    <p>Цена</p>
                    <img src="" alt="" />
                    <button></button>
                </section>
                <section className=''>
                    <input type="number" />
                    <input type="number" />
                </section>
            </section>
            <section>
                <section>
                    <p>Тип</p>
                    <img src="" alt="" />
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
            
            <section>
                <section>
                    <p>Вязкость по SAE</p>
                    <img src="" alt="" />
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
             
             <section>
                <section>
                    <p>Спецификация</p>
                    <img src="" alt="" />
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
            <button type='button' onClick={() => console.log(arrayChecked)}>Показать</button>
            <input type="reset" value="Сбросить" onClick={() => setArrayChecked([])}/>
        </form>
        
    )
}

export default PropertySorting;
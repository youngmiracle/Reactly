import { useState } from 'react'
import './propertySorting.css'

const PropertySorting = ({generalProps}: any) => {
    const [arrayChecked, setArrayChecked] = useState<any>([]);
    const checkedInputSort = (props: "" | "type" | "SAE" | "specifical" | null) => {
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
        <section style={{paddingTop: "10vh"}}>
            {generalProps.typeAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.type}
                        <input type="checkbox" onClick={() => checkedInputSort(props.type)}/>
                    </p>
                )
            })}
            {generalProps.SAEAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.SAE}
                        <input type="checkbox" onClick={() => checkedInputSort(props.SAE)}/>
                    </p>
                )
            })}
            {generalProps.SpecificalAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.specifical}
                        <input type="checkbox" onClick={() => checkedInputSort(props.specificals)}/>
                    </p>
                )
            })}
            <button onClick={() => console.log(arrayChecked)}>adasdasd</button>
        </section>
    )
}

export default PropertySorting;
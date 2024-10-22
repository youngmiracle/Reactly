import { useState } from 'react'
import './typeCatalog.css'

interface SortingСolumnProps{
    generalProps: any,

}

const  SortingСolumn = ({generalProps}: SortingСolumnProps) => {
    const [arrayResult, setArrayResult] = useState<string[] | null[] | any>([])
    
    const addDataArrayType = (props: any) => {
        if(false == arrayResult.includes(props)){
            setArrayResult([...arrayResult, props]);
            console.log(arrayResult)
        }else{
            setArrayResult(arrayResult.filter((deleted: string | null) => deleted !== props))
            console.log(arrayResult)
            console.log("найдено совпадение")
        }
    }

    return(
        <section style={{paddingTop: "10vh"}}>
            {generalProps.typeAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.type}
                        <input type="checkbox" onClick={() => addDataArrayType(props.type)}/>
                    </p>
                )
            })}
            {generalProps.SAEAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.SAE}
                        <input type="checkbox" onClick={() => addDataArrayType(props.SAE)}/>
                    </p>
                )
            })}
            {generalProps.SpecificalAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.specifical}
                        <input type="checkbox" onClick={() => addDataArrayType(props.specifical)}/>
                    </p>
                )
            })}
            <button onClick={() => console.log(arrayResult)}>dsdsd</button>
        </section>
    )
}

export default SortingСolumn;
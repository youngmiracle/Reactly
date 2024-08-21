import './typeCatalog.css'

interface TypeCatalogProps{
    generalProps: any,

}

const TypeCatalog = ({generalProps}: TypeCatalogProps) => {
    
    return(
        <section style={{paddingTop: "10vh"}}>
            {generalProps.typeAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.type}
                        <input type="radio"/>
                    </p>
                )
            })}
            {generalProps.SAEAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.SAE}
                        <input type="radio"/>
                    </p>
                )
            })}
            {generalProps.SpecificalAll.map((props: any) => {
                return(
                    <p key={props.id}>
                        {props.specifical}
                        <input type="radio"/>
                    </p>
                )
            })}
        </section>
    )
}

export default TypeCatalog;
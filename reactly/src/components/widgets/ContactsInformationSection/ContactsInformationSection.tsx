import './contactsInformationSection.css'

interface ContactsInformationSectionProps {
    img: string,
    title: string,
    data: string,
    colorData?: string
}

const ContactsInformationSection =  ({img, title, data, colorData}: ContactsInformationSectionProps) => {
    return(
        <section className='contactsInformationSection'> 
            <img src={img} alt="иконка" className='contactsInformationSection__img'/>
            <section className='contactsInformationSection__info'>
                <p>{title}</p>
                <p style={{color: `${colorData}`, fontWeight: 700}}>{data}</p>
            </section>
        </section>
    )
}
export default ContactsInformationSection;
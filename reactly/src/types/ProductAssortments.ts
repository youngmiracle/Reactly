interface ProductAssortmentsProps {
    id: number,
    logoImg: string,
    imageItem: string,
    titleEng: string,
    titleRus: string,
    linkName: string
}

export const ProductAssortments: ProductAssortmentsProps[] = [
    {
        id: 1,
        logoImg: "https://i.imgur.com/BCgIdlg.png",
        imageItem: "https://i.imgur.com/Sr7Rdrb.png",
        titleEng: "Motor oils",
        titleRus: "Моторные масла",
        linkName: "MotorOil"
    },
    {
        id: 2,
        logoImg: "https://i.imgur.com/BCgIdlg.png",
        imageItem: "https://i.imgur.com/XKfzfE6.png",
        titleEng: "Transsmision oils",
        titleRus: "Трансмиссионные масла",
        linkName: "TransmissionOil"
    },
    {
        id: 3,
        logoImg: "https://i.imgur.com/BCgIdlg.png",
        imageItem: "https://i.imgur.com/np859kl.png",
        titleEng: "Oils for commercial vehicles",
        titleRus: "Масла для коммерческой техники",
        linkName: "CommercialOil"
    },
    {
        id: 4,
        logoImg: "https://i.imgur.com/BCgIdlg.png",
        imageItem: "https://i.imgur.com/JbdvNQl.png",
        titleEng: "Antifreeze",
        titleRus: "Антифризы",
        linkName: "Antifreeze"
    },
]
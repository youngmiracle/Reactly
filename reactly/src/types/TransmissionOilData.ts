interface TransmissionOilDataProps{
    typeAll: {
        id: number,
        type: "Синтетическое" | "Минеральное",
    }[],
    SAEAll:{
        id: number,
        SAE: string,
    }[],
    SpecificalAll:{
        id: number,
        specifical: string,
    }[]
}

export const TransmissionOilData: TransmissionOilDataProps = {
        typeAll: [
            {
                id: 1,
                type: "Синтетическое",
            },
            {
                id: 2,
                type: "Минеральное",
            }
        ],
        SAEAll: [
            {
                id: 1,
                SAE: "75W-90",
            },
            {
                id: 2,
                SAE: "80W-90",
            },
        ],
        SpecificalAll:[
            {
                id: 1,
                specifical: "API GL-4",
            },
            {
                id: 2,
                specifical: "API GL-5",
            },
            {
                id: 3,
                specifical: "DEXRON III",
            },
            {
                id: 4,
                specifical: "NS-2",
            },
            {
                id: 5,
                specifical: "NS-3",
            },
            {
                id: 6,
                specifical: "SP-3",
            },
            {
                id: 7,
                specifical: "SP-4",
            },
            {
                id: 8,
                specifical: "TYPE T-IV",
            }
        ]
}
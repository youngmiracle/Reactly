interface CommercialOilDataProps{
    typeAll: {
        id: number,
        type: "Полусинтетическое" | "Минеральное",
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

export const CommercialOilData: CommercialOilDataProps = {
        typeAll: [
            {
                id: 1,
                type: "Полусинтетическое",
            },
            {
                id: 2,
                type: "Минеральное",
            }
        ],
        SAEAll: [
            {
                id: 1,
                SAE: "10W-40",
            },
            {
                id: 2,
                SAE: "15W-40",
            },
        ],
        SpecificalAll:[
            {
                id: 1,
                specifical: "ACEA A3/B4",
            },
            {
                id: 2,
                specifical: "ACEA E7",
            },
            {
                id: 3,
                specifical: "API CI4/SL",
            }
        ]
}
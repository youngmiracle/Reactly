interface MotorOilDataProps{
    typeAll: {
        id: number,
        type: "Синтетическое" | "Полусинтетическое"
    }[],
    SAEAll:{
        id: number,
        SAE: string
    }[],
    SpecificalAll:{
        id: number,
        specifical: string
    }[]
}

export const MotorOilData: MotorOilDataProps = {
        typeAll: [
            {
                id: 1,
                type: "Синтетическое"
            },
            {
                id: 2,
                type: "Полусинтетическое"
            }
        ],
        SAEAll: [
            {
                id: 1,
                SAE: "0W-16"
            },
            {
                id: 2,
                SAE: "0W-20"
            },
            {
                id: 3,
                SAE: "0W-30"
            },
            {
                id: 4,
                SAE: "5W-20"
            },
            {
                id: 5,
                SAE: "5W-30"
            },
            {
                id: 6,
                SAE: "5W-40"
            },
            {
                id: 7,
                SAE: "10W-40"
            },
        ],
        SpecificalAll:[
            {
                id: 1,
                specifical: "ACEA A3/B4"
            },
            {
                id: 2,
                specifical: "ACEA A5/B5"
            },
            {
                id: 3,
                specifical: "ACEA C3"
            },
            {
                id: 4,
                specifical: "ACEA С2/С3"
            },
            {
                id: 5,
                specifical: "API SL/CF"
            },
            {
                id: 6,
                specifical: "API SN"
            },
            {
                id: 7,
                specifical: "API SN/CF"
            },
            {
                id: 8,
                specifical: "API SP"
            },
            {
                id: 9,
                specifical: "API SP/CF"
            },
            {
                id: 10,
                specifical: "ILSAC GF-5"
            },
            {
                id: 11,
                specifical: "ILSAC GF-6А "
            },
        ]
}
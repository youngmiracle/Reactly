interface MotorOilDataProps{
    typeAll: {
        id: number,
        type: "Синтетическое" | "Полусинтетическое",
        checked: boolean
    }[],
    SAEAll:{
        id: number,
        SAE: string,
        checked: boolean
    }[],
    SpecificalAll:{
        id: number,
        specifical: string,
        checked: boolean
    }[]
}

export const MotorOilData: MotorOilDataProps = {
        typeAll: [
            {
                id: 1,
                type: "Синтетическое",
                checked: false
            },
            {
                id: 2,
                type: "Полусинтетическое",
                checked: false
            }
        ],
        SAEAll: [
            {
                id: 1,
                SAE: "0W-16",
                checked: false
            },
            {
                id: 2,
                SAE: "0W-20",
                checked: false
            },
            {
                id: 3,
                SAE: "0W-30",
                checked: false
            },
            {
                id: 4,
                SAE: "5W-20",
                checked: false
            },
            {
                id: 5,
                SAE: "5W-30",
                checked: false
            },
            {
                id: 6,
                SAE: "5W-40",
                checked: false
            },
            {
                id: 7,
                SAE: "10W-40",
                checked: false
            },
        ],
        SpecificalAll:[
            {
                id: 1,
                specifical: "ACEA A3/B4",
                checked: false
            },
            {
                id: 2,
                specifical: "ACEA A5/B5",
                checked: false
            },
            {
                id: 3,
                specifical: "ACEA C3",
                checked: false
            },
            {
                id: 4,
                specifical: "ACEA С2/С3",
                checked: false
            },
            {
                id: 5,
                specifical: "API SL/CF",
                checked: false
            },
            {
                id: 6,
                specifical: "API SN",
                checked: false
            },
            {
                id: 7,
                specifical: "API SN/CF",
                checked: false
            },
            {
                id: 8,
                specifical: "API SP",
                checked: false
            },
            {
                id: 9,
                specifical: "API SP/CF",
                checked: false
            },
            {
                id: 10,
                specifical: "ILSAC GF-5",
                checked: false
            },
            {
                id: 11,
                specifical: "ILSAC GF-6А ",
                checked: false
            },
        ]
}
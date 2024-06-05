import orange from '../../../icons/materials/f_f_health_53_svg_f_health_53_1nbg.svg'

export type resultDataType = {
    type: string;
    bugName: string;
    alphabet: string;
    message: string;
    img: string;
    color: string;
}



export const resultData: resultDataType[] = [
    {
        type: 'stress', bugName: 'ストレス', alphabet: 'GOKUROU',
        message: 'とっても頑張り屋さんで、少し', img: orange, color: ''
    },
    {
        type: 'tired', bugName: '疲労', alphabet: 'OTSUKARE',
        message: 'とっても頑張り屋さんで、少し', img: orange, color: ''
    },

]
import orange from '../../../icons/materials/f_f_health_53_svg_f_health_53_1nbg.svg'

export type resultDataType = {
    type: string;
    bugName: string;
    alphabet: string;
    message: string;
    img: string;
    color: string;
    drink: string;
    drinkExplain1: string;
    drinkExplain2: string;
}

export const menuAll: { name: string, price: number, content: string }[] = [
    { name: 'スパークリングオレンジティー', price: 250, content: '紅茶（無糖）、みかん、オレンジジュース、炭酸水' },
    { name: 'イタリアンジューシー', price: 200, content: '紅茶（レモンティー）、みかん、オレンジジュース' },
    { name: 'ミャンマーラペイエ', price: 250, content: '紅茶（ストレートティー）、シナモンパウダー、コンデンスミルク' },
    { name: 'チョコミルクティー', price: 200, content: '紅茶（ミルクティー）、ココア、コンデンスミルク' },
    { name: '梅干しティーサワー', price: 200, content: '紅茶（レモンティー）、梅干し、炭酸水' },
]
// メニューのcontentと料金合ってるかは要確認


export const resultData: resultDataType[] = [
    {
        type: 'stress', bugName: 'ストレス', alphabet: 'GOKUROU',
        message: 'とっても頑張り屋さんで、少し', img: orange, color: '#33A474', drink: 'ミャンマーラペイエ',
        drinkExplain1: 'ミャンマーラペイエは、',
        drinkExplain2: 'ミャンマーラペイエは、'
    },
    {
        type: 'tired', bugName: '疲労', alphabet: 'OTSUKARE',
        message: '忙しい毎日を送っているようです。', img: orange, color: 'red', drink: '梅干しティーサワー',
        drinkExplain1: '梅干しティーサワーは、',
        drinkExplain2: '梅干しティーサワーは、'
    },
    {
        type: 'depression', bugName: '鬱屈', alphabet: 'GENKIDASHITE',
        message: '今すこし心のガソリンが必要なようです。', img: orange, color: 'red', drink: 'チョコミルクティー',
        drinkExplain1: 'チョコミルクティーは、',
        drinkExplain2: 'チョコミルクティーは、'
    },
    {
        type: 'playful', bugName: '遊びすぎ', alphabet: '',
        message: 'かなりエネルギッシュな毎日を送っているようです。', img: orange, color: 'red', drink: 'イタリアンジューシー',
        drinkExplain1: 'イタリアンジューシーは、',
        drinkExplain2: 'イタリアンジューシーは、'
    },
    {
        type: 'healthy', bugName: '健康そのもの', alphabet: '',
        message: '完璧で最強な身体をお持ちのようです。', img: orange, color: 'red', drink: 'スパークリングオレンジティー',
        drinkExplain1: 'スパークリングオレンジティーは、',
        drinkExplain2: 'スパークリングオレンジティーは、'
    },

]
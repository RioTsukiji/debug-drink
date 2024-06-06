import orange from '../../../icons/materials/f_f_health_53_svg_f_health_53_1nbg.svg'

export type resultDataType = {
    type: string;
    bugName: string;
    alphabet: string;
    message: string;
    img: string;
    color: string;
    drink: string;
    drinkMessage: string;
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
        type: 'stress', bugName: 'ストレス', alphabet: 'GOKUROU-SAN',
        message: '学業でしょうか？お仕事でしょうか？あなたはとっても頑張り屋さんで、少し心の緊張が続いているようです。', img: orange, color: '#33A474', drink: 'ミャンマーラペイエ', drinkMessage: 'シナモンの香りで、神経を柔らか〜くほぐしましょう。', //ドリンクメッセージを新規追加した
        drinkExplain1: 'ミャンマーラペイエは、',
        drinkExplain2: 'ミャンマーラペイエは、'
    },
    {
        type: 'tired', bugName: '疲労', alphabet: 'OTSUKARE-SAN',
        message: 'あなたは忙しい毎日を送っており、肉体が疲労しているようです。そんななかしっかりお祭りに参加するあなたは最高です。', img: orange, color: 'red', drink: '梅干しティーサワー', drinkMessage: '疲労によく効く必殺技は、強い酸味以外にありません。',
        drinkExplain1: '梅干しティーサワーは、',
        drinkExplain2: '梅干しティーサワーは、'
    },
    {
        type: 'depression', bugName: '鬱屈', alphabet: 'GENKI-DASHITE',
        message: 'あなたは最近よくないことがあったのか、活力が不足しているかもしれません。幸せを感じる機会が減っているようです。', img: orange, color: 'red', drink: 'チョコミルクティー', drinkMessage: 'ココアの甘さがあなたの鬱屈をデバッグしてくれます。',
        drinkExplain1: 'チョコミルクティーは、',
        drinkExplain2: 'チョコミルクティーは、'
    },
    {
        type: 'playful', bugName: '遊びすぎ', alphabet: 'SAKENOMI-SAN',
        message: 'あなたは自分の欲求に忠実で、充実した毎日を送っているようです。幸せそのものですが、身体が完全に酒と夜遊びに浸かりきっています。', img: orange, color: 'red', drink: 'イタリアンジューシー', drinkMessage: '今日くらいはさっぱりしたジュースを飲んで、童心に帰ってみましょう。',
        drinkExplain1: 'イタリアンジューシーは、',
        drinkExplain2: 'イタリアンジューシーは、'
    },
    {
        type: 'healthy', bugName: '健康そのもの', alphabet: 'PERFECT-HUMAN',
        message: '完璧で最強な身体をお持ちのようです。毎日楽しく、規則正しく、元気でストレスフリーで立派に生きています。素晴らしい！！！！', img: orange, color: 'red', drink: 'スパークリングオレンジティー', drinkMessage: '完璧な身体には、完璧なドリンクがよくお似合いですよ。',
        drinkExplain1: 'スパークリングオレンジティーは、',
        drinkExplain2: 'スパークリングオレンジティーは、'
    },

]
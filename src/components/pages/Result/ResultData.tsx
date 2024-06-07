import sparcling from '../../../icons/resultIcon/sparklingorange.svg';
import ItalianJucie from '../../../icons/resultIcon/italianjucie.svg';
import cocoa from '../../../icons/resultIcon/chococoa.svg';
import myanma from '../../../icons/resultIcon/myanma.svg';
import umeboshi from '../../../icons/resultIcon/umeboshi.svg';

interface ResultDataType {
  bugName: string;
  alphabet: string;
  message: string;
  img: string; // 画像の型がstringと仮定していますが、適切な型に変更してください
  color: string;
  drink: string;
  drinkMessage: string;
  drinkExplain1: string;
  drinkExplain2: string;
  type?: string; // typeがない場合もあるためオプションにします
}

// 全体のデータの型定義
interface ResultData {
  stress: ResultDataType;
  tired: ResultDataType;
  depression: ResultDataType;
  playful: ResultDataType;
  healthy: ResultDataType;
}

export const menuAll: { name: string; price: number; content: string }[] = [
  {
    name: "スパークリングオレンジティー",
    price: 300,
    content:
      "午後の紅茶おいしい無糖、炭酸水、オレンジジュース、みかん、シロップ",
  },
  {
    name: "イタリアンジューシー",
    price: 300,
    content: "午後の紅茶レモンティー、オレンジジュース、みかん、シロップ",
  },
  {
    name: "ミャンマーラペイエ",
    price: 300,
    content: "午後の紅茶ストレートティー、コンデンスミルク、シナモンパウダー",
  },
  {
    name: "チョコミルクティー",
    price: 200,
    content: "午後の紅茶ミルクティー、ココア、コンデンスミルク",
  },
  {
    name: "梅干しティーサワー",
    price: 200,
    content: "午後の紅茶レモンティー、梅干し、炭酸水",
  },
];
// メニューのcontentと料金合ってるかは要確認

export const resultData: ResultData = {
  stress: {
    bugName: "ストレス",
    alphabet: "GOKUROU-SAN",
    message:
      "学業でしょうか？お仕事でしょうか？あなたはとっても頑張り屋さんで、少し心の緊張が続いているようです。",
    img: myanma,
    color: "#88619A",
    drink: "ミャンマーラペイエ",
    drinkMessage: "シナモンの香りで、神経を柔らか〜くほぐしましょう。",
    drinkExplain1:
      "午後の紅茶ストレートティー、コンデンスミルク、シナモンパウダー",
    drinkExplain2: "ミャンマーラペイエは、忙しい日常の中でリラックスするための素晴らしい選択です。紅茶の深い香りと爽やかな味わいは、心を落ち着かせる効果があります。また、シナモンは温かみのあるスパイスで、リラックス効果とともに、血行を促進し体を温める効果も期待できます。そして、コンデンスミルクのまろやかで甘い風味が加わることで、心地よい甘さがストレスを軽減し、心身ともにリラックスさせてくれます。このドリンクを楽しむひとときは、まさに至福のリラクゼーションタイムとなるでしょう。"
  },
  tired: {
    bugName: "疲労",
    alphabet: "OTSUKARE-SAN",
    message:
      "あなたは忙しい毎日を送っており、肉体が疲労しているようです。そんななかしっかりお祭りに参加するあなたは最高です。",
    img: umeboshi,
    color: "#33A474",
    drink: "梅干しティーサワー",
    drinkMessage: "疲労によく効く必殺技は、強い酸味以外にありません。",
    drinkExplain1: "午後の紅茶レモンティー、梅干し、炭酸水",
    drinkExplain2: "梅干しティーサワーは、疲労回復に効果的な一杯です。レモンティーに含まれるビタミンCは、抗酸化作用があり、免疫力を高める効果があります。また、レモンの爽やかな酸味は、疲れた体をリフレッシュさせてくれます。梅干しはクエン酸が豊富で、エネルギー代謝を促進し、疲労物質の分解を助けます。さらに、炭酸水のシュワシュワとした刺激が、飲むたびに気分をリフレッシュさせ、爽快感をもたらします。このドリンクは、運動後や仕事の合間に飲むことで、疲れを癒し、体と心に活力を取り戻すのに最適です。"
  },
  depression: {
    bugName: "鬱屈",
    alphabet: "GENKI-DASHITE",
    message:
      "あなたは最近よくないことがあったのか、活力が不足しているかもしれません。幸せを感じる機会が減っているようです。",
    img: cocoa,
    color: "#4298b4",
    drink: "チョコミルクティー",
    drinkMessage: "ココアの甘さがあなたの鬱屈をデバッグしてくれます。",
    drinkExplain1: "午後の紅茶ミルクティー、ココア、コンデンスミルク",
    drinkExplain2: "チョコミルクティーは、鬱屈した気分を和らげる効果があります。ココアに含まれるテオブロミンとフェニルエチルアミンは、脳内の幸せホルモンであるセロトニンの分泌を促進し、気分を高める効果があります。ミルクティーは、紅茶のリラックス効果とミルクの優しい風味が心を穏やかにしてくれます。さらに、コンデンスミルクの濃厚な甘さが加わることで、心地よい甘さが心の緊張をほぐし、心地よい満足感を与えてくれます。このドリンクは、ストレスがたまったときや気分が落ち込んでいるときにぴったりで、心を温かく包み込み、穏やかなひとときを提供してくれます。"
  },
  playful: {
    bugName: "遊びすぎ",
    alphabet: "SAKENOMI-SAN",
    message:
      "あなたは自分の欲求に忠実で、充実した毎日を送っているようです。幸せそのものですが、身体が完全に酒と夜遊びに浸かりきっています。",
    img: ItalianJucie,
    color: "#E4AE3A",
    drink: "イタリアンジューシー",
    drinkMessage:
      "今日くらいはさっぱりしたジュースを飲んで、童心に帰ってみましょう。",
    drinkExplain1: "午後の紅茶レモンティー、オレンジジュース、みかん、シロップ",
    drinkExplain2: "イタリアンジューシーは、童心に帰らせる効果があります。午後の紅茶レモンティーの爽やかな香りと味わいは、どこか懐かしい夏の日の記憶を呼び覚まします。オレンジジュースのフルーティーな甘さと酸味が、活気に満ちた子供時代の元気な気持ちを蘇らせます。そして、みかんの優しい甘さとジューシーな食感が、童心の無邪気さと純真さを思い出させてくれます。最後に、シロップのほんのりとした甘さが全体を包み込み、一口飲むたびに心が温かく満たされる感覚をもたらします。このドリンクは、大人になって忙しい日々を過ごす中で、ふとした瞬間に童心に帰り、心をリフレッシュさせるのにぴったりです。",
  },
  healthy: {
    bugName: "健康そのもの",
    alphabet: "PERFECT-BODY",
    message:
      "完璧で最強な身体をお持ちのようです。毎日楽しく、規則正しく、元気でストレスフリーで立派に生きています。素晴らしい！！！！",
    img: sparcling,
    color: "#cc3e60",
    drink: "スパークリングオレンジティー",
    drinkMessage: "完璧な身体には、完璧なドリンクがよくお似合いですよ。",
    drinkExplain1:
      "午後の紅茶おいしい無糖、炭酸水、オレンジジュース、みかん、シロップ",
    drinkExplain2: "スパークリングオレンジティーは、健康を増進するのに最適な一杯です。ストレートティーは、カフェインによる適度な覚醒効果と豊富な抗酸化物質が特徴で、体のバランスを整えてくれます。炭酸水が加わることで、爽快感が増し、リフレッシュ効果が期待できます。オレンジジュースはビタミンCを豊富に含み、免疫力を強化し、疲労回復を助けます。みかんの自然な甘さと栄養素が、フルーツのフレッシュさを引き立て、健康的なエネルギー補給をサポートします。このドリンクは、体に良い成分をバランスよく含んでおり、日々の健康維持にぴったりです。健康志向の方におすすめの、リフレッシュしながら栄養を補給できる完璧なドリンクです。"
  },
};

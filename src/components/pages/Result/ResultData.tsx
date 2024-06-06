import orange from "../../../icons/materials/f_f_health_53_svg_f_health_53_1nbg.svg";

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
    price: 250,
    content:
      "午後の紅茶おいしい無糖、炭酸水、オレンジジュース、みかん、シロップ",
  },
  {
    name: "イタリアンジューシー",
    price: 250,
    content: "午後の紅茶レモンティー、オレンジジュース、みかん、シロップ",
  },
  {
    name: "ミャンマーラペイエ",
    price: 250,
    content: "午後の紅茶ストレートティー、コンデンスミルク、シナモンパウダー",
  },
  {
    name: "チョコミルクティー",
    price: 250,
    content: "午後の紅茶ミルクティー、ココア、コンデンスミルク",
  },
  {
    name: "梅干しティーサワー",
    price: 250,
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
    img: orange,
    color: "#88619A",
    drink: "ミャンマーラペイエ",
    drinkMessage: "シナモンの香りで、神経を柔らか〜くほぐしましょう。",
    drinkExplain1:
      "午後の紅茶ストレートティー、コンデンスミルク、シナモンパウダー",
    drinkExplain2: "ミャンマーラペイエは、",
  },
  tired: {
    bugName: "疲労",
    alphabet: "OTSUKARE-SAN",
    message:
      "あなたは忙しい毎日を送っており、肉体が疲労しているようです。そんななかしっかりお祭りに参加するあなたは最高です。",
    img: orange,
    color: "#33A474",
    drink: "梅干しティーサワー",
    drinkMessage: "疲労によく効く必殺技は、強い酸味以外にありません。",
    drinkExplain1: "午後の紅茶レモンティー、梅干し、炭酸水",
    drinkExplain2: "梅干しティーサワーは、",
  },
  depression: {
    bugName: "鬱屈",
    alphabet: "GENKI-DASHITE",
    message:
      "あなたは最近よくないことがあったのか、活力が不足しているかもしれません。幸せを感じる機会が減っているようです。",
    img: orange,
    color: "#4298b4",
    drink: "チョコミルクティー",
    drinkMessage: "ココアの甘さがあなたの鬱屈をデバッグしてくれます。",
    drinkExplain1: "午後の紅茶ミルクティー、ココア、コンデンスミルク",
    drinkExplain2: "チョコミルクティーは、",
  },
  playful: {
    bugName: "遊びすぎ",
    alphabet: "SAKENOMI-SAN",
    message:
      "あなたは自分の欲求に忠実で、充実した毎日を送っているようです。幸せそのものですが、身体が完全に酒と夜遊びに浸かりきっています。",
    img: orange,
    color: "#E4AE3A",
    drink: "イタリアンジューシー",
    drinkMessage:
      "今日くらいはさっぱりしたジュースを飲んで、童心に帰ってみましょう。",
    drinkExplain1: "午後の紅茶レモンティー、オレンジジュース、みかん、シロップ",
    drinkExplain2: "イタリアンジューシーは、",
  },
  healthy: {
    bugName: "健康そのもの",
    alphabet: "PERFECT-BODY",
    message:
      "完璧で最強な身体をお持ちのようです。毎日楽しく、規則正しく、元気でストレスフリーで立派に生きています。素晴らしい！！！！",
    img: orange,
    color: "#cc3e60",
    drink: "スパークリングオレンジティー",
    drinkMessage: "完璧な身体には、完璧なドリンクがよくお似合いですよ。",
    drinkExplain1:
      "午後の紅茶おいしい無糖、炭酸水、オレンジジュース、みかん、シロップ",
    drinkExplain2: "スパークリングオレンジティーは、",
  },
};

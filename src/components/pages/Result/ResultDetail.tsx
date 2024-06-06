
import { Footer } from "../../templates/Footer";
import { menuAll, resultData } from "./ResultData";


const Menu = () => {
    const MenuList = ({ menuList }: { menuList: { name: string, price: number, content: string } }) => {
        return (
            <>
                <ul style={{ paddingLeft: '15px', listStyleType: 'square', color: '#4298b4', fontSize: '18px', marginBottom: '5px', fontWeight: 'bold' }}>
                    <li><span style={{ color: '#343c4b', marginRight: '10px' }}>{menuList.name}</span><br /><span style={{ color: '#343c4b', opacity: '0.35' }}>{menuList.price}</span><span style={{ fontSize: '10px', color: '#343c4b', paddingLeft: '1px', opacity: '0.3' }}>yen</span></li>
                </ul >
                <p style={{ paddingLeft: '15px', marginBottom: '15px', opacity: '0.6' }}>{menuList.content}</p>
            </>
        );
    }

    return (
        <>
            <div style={{ border: '1px solid #DDDFE2', borderRadius: '10px', padding: '20px', marginTop: '40px' }}>
                <h2 style={{ paddingBottom: '10px' }}>他のドリンクメニュー</h2>
                <p style={{ fontSize: '18px', marginBottom: '15px' }}>もちろん、診断結果以外のメニューを頼むこともできます！</p>
                <div>
                    {menuAll.map((menuList) => <MenuList menuList={menuList} />)}
                </div>
            </div>
        </>
    );
}



const ResultDetail = () => {
    return (<>
        <div style={{ backgroundColor: resultData[0].color, padding: '80px 20px 20px 20px' }}>
            <h1 style={{ color: 'white' }}>{resultData[0].bugName}</h1>
            <h2 style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '30px' }}>{resultData[0].alphabet}型のドリンク</h2>
            <div style={{ display: 'grid', placeContent: 'center' }}>
                <img src={resultData[0].img} style={{ marginBottom: '20px', width: '200px' }} />
            </div>
            <h1 style={{ color: 'white', marginBottom: '5px' }}>{resultData[0].drink}</h1>
            <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>{resultData[0].drinkMessage}</p>
        </div >
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px 20px 100px 20px' }}>
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '10px' }}>材料</h2>
                <p style={{ fontSize: '18px' }}>{resultData[0].drinkExplain1}</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '10px' }}>期待される効果</h2>
                <p style={{ fontSize: '18px' }}>{resultData[0].drinkExplain2}</p>
            </div>
            <Menu />
        </div >
        <Footer />
    </>)
}

export default ResultDetail;
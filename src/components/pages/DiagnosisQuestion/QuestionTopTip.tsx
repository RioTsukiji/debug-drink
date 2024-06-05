import fruits1 from '../../../icons/fruits.svg';
import fruits2 from '../../../icons/orange.svg';
import fruits3 from '../../../icons/lemon.svg';

const TipCard = ({ icon, text }: { icon: string, text: string }) => {
    return (
        <>
            <div style={{
                backgroundColor: 'rgba(255,255,255,.8)',
                padding: '15px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginBottom: '10px',
            }}>
                <img src={icon} style={{
                    width: '28px',
                    height: '28px',
                    paddingRight: '12px'
                }} />
                <p>{text}</p>

            </div>
        </>
    );
}
const QuestionTopTipIndex = () => {
    const tips = [
        { icon: fruits1, text: 'あなたの主観的な身体の具合に応じて、おすすめのドリンクを提案します。' },
        { icon: fruits2, text: 'この診断はジョーク企画ですので、科学的な根拠は一切ございません。' },
        { icon: fruits3, text: '診断で出たドリンクを必ず注文する必要はありません！' },
    ];

    return (
        <>
            <div className="tips" style={{
                paddingTop: '15px'
            }}>
                {tips.map((tips) => (
                    <TipCard icon={tips.icon} text={tips.text} />
                ))}
            </div>
        </>
    )
}

export default QuestionTopTipIndex;
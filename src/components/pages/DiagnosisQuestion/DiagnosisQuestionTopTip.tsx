import fruits1 from '../../../icons/materials/f_f_health_36_svg_f_health_36_2nbg.svg';
import fruits2 from '../../../icons/materials/f_f_health_36_svg_f_health_36_1nbg.svg';
import fruits3 from '../../../icons/materials/f_f_health_36_svg_f_health_36_2nbg.svg';

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
                filter: 'hue-rotate(0deg) contrast(150%)'

            }}>
                <img src={icon} style={{
                    width: '30px',
                    height: '30px',
                    paddingRight: '4px',
                    paddingLeft: '4px'

                }} />
                <p>{text}</p>

            </div>
        </>
    );
}
const QuestionTopTipIndex = () => {
    const tips = [
        { icon: fruits1, text: 'あなたの主観的な身体の具合に応じて、おすすめのドリンクを提案します。' },
        { icon: fruits2, text: 'この診断はジョーク企画ですので、科学的な根拠は一切ございません。ご了承ください。' },
        { icon: fruits3, text: '診断で出たドリンクを必ず注文する必要はありません！気楽に答えましょう。' },
    ];

    return (
        <>
            <div className="tips" style={{
                paddingTop: '15px',
                backgroundColor: '#33A474',
            }}>
                {tips.map((tips) => (
                    <TipCard icon={tips.icon} text={tips.text} />
                ))}
            </div>
        </>
    )
}

export default QuestionTopTipIndex;
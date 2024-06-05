import { Typography } from "@mui/material";
import QuestionTopTipIndex from "./DiagnosisQuestionTopTip";
import eventLogo from '../../../icons/debugdrinkIcon.jpg'

const QuestionTopTitle = () => {
    return (
        <>
            <div className="Title" style={{
                paddingBottom: '15px',
                paddingTop: '90px',
                overflow: 'hidden',
                backgroundColor: '#33A474'
            }}
            >
                {/* <div style={{ display: 'grid', placeItems: 'center', marginBottom: '24px' }}>
                    <img src={eventLogo} style={{ width: '140px' }} />
                </div> */}

                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: '#33A474',
                        marginBottom: '10px',
                        fontWeight: 'bold',
                    }}>健康診断テスト</Typography>
                <p
                    style={{
                        color: 'white',
                        backgroundColor: '#33A474',
                        textAlign: 'center',
                    }}
                >Presented by Bashi.com</p></div>

        </>
    );
}



const QuestionTop = () => {

    return (<>
        <div style={{
            backgroundColor: '#33A474',
            padding: '15px'
        }}>
            <QuestionTopTitle />
            <QuestionTopTipIndex />


        </div>
    </>);
};

export default QuestionTop;
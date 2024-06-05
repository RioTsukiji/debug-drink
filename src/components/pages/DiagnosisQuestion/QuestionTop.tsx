import { Typography } from "@mui/material";
import QuestionTopTipIndex from "./QuestionTopTip";
import eventLogo from '../../../icons/debugdrinkIcon.jpg'

const QuestionTopTitle = () => {
    return (
        <>
            <div className="Title" style={{
                paddingBottom: '15px',
                paddingTop: '90px',
                overflow: 'hidden',


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

                        marginBottom: '10px',
                        fontWeight: 'bold',

                    }}>健康診断テスト</Typography>
                <p
                    style={{
                        color: 'white',
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
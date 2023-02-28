import Header from "./Header.jsx";
import GoBack from "./GoBack.jsx";
import StepNavigation from './StepNavigation.jsx'
import ProgressInfo from "./ProgressInfo.jsx";

const days = ['1', '2', '3', '4', '5', '6', '7']

const PersonalObjectives = () => {
    return (
        <>
            <Header />
            <GoBack />
            <div className='mx-5 py-5'>
                <h3>Llevas una racha de <b>3 días</b> leyendo</h3>
                <StepNavigation daysRead={days} />
                <ProgressInfo />
            </div>
        </>
    )
}

export default PersonalObjectives;
import Step from "./Step.jsx";
import { FaCheck } from "react-icons/all.js";

const StepNavigation = (props) => {
    return (
        <div className='flex items-center justify-between py-3'>
            <Step icon={<FaCheck />} daysRead={props.daysRead} />
        </div>
    )
}

export default StepNavigation;
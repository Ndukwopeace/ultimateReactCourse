import {useState} from "react";
import Button from "./Button.jsx";
import StepMessage from "./StepMessage.jsx";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
export default function Steps_v2() {
    // State should always be at the begginning of the component
    // useState is a function that returns an array , which contains the initial value of the state and a function that sets the state
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((step) => step - 1);
    }

    function handleNext() {
        if (step < 3) setStep((step) => step + 1);
    }

    function handleOpen() {
        return setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div>
            <div>
                <button className="close" onClick={handleOpen}>
                    &times;
                </button>
            </div>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <StepMessage step={step}> {messages[step - 1]}</StepMessage>


                    <div className="buttons">
                        <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrevious}>
                            <span>👈🏾</span> Previous</Button>
                        <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}
                                text={"Next"}>Next <span>👉🏾</span></Button>
                    </div>
                </div>
            )}
        </div>
    );
}
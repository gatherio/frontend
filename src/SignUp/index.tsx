import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import "./styles.scss";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const stepProps = { step, setStep };

  return (
    <div className="styles_container">
      {step === 1 && <Step1 {...stepProps} />}
      {step === 2 && <Step2 {...stepProps} />}
      {step === 3 && <Step3 {...stepProps} />}
      {step === 4 && <Step4 {...stepProps} />}
    </div>
  );
};

export default SignUp;

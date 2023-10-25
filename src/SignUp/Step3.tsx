import { StepProps } from "./types";

const Step3 = ({ step, setStep }: StepProps) => {
  return (
    <div>
      <h1>Step {step}</h1>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );
};

export default Step3;

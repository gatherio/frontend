import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";

const Step4 = ({ step, setStep }: StepProps) => {
  return (
    <div className="step_container">
      <h1>Step {step}</h1>
      <Button onClick={() => setStep(step + 1)}>Next</Button>
    </div>
  );
};

export default Step4;

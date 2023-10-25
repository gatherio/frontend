import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";

const Step2 = ({ step, setStep }: StepProps) => {
  return (
    <div>
      <h1>Step {step}</h1>
      <Button onClick={() => setStep(step + 1)}> Confirm </Button>
    </div>
  );
};

export default Step2;

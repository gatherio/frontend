import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";

const Step3 = ({ step, setStep }: StepProps) => {
  return (
    <div>
      <h1>Step {step}</h1>
      <Button onClick={() => setStep(step + 1)}>Allow</Button>
    </div>
  );
};

export default Step3;

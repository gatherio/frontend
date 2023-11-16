import Title from "../components/Atoms/Title/Title";
import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";

const Step1 = ({ step, setStep }: StepProps) => {
  return (
    <div className="step_container">
      <Title> GATHER </Title>
      <h1>Step {step}</h1>
      <Button onClick={() => setStep(step + 1)}>Next</Button>
    </div>
  );
};

export default Step1;

import Title from "../components/Atoms/Title/Title";
import { StepProps } from "./types";

const Step1 = ({ step, setStep }: StepProps) => {
  return (
    <div>
      <Title> GATHER </Title>
      <h1>Step {step}</h1>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );
};

export default Step1;

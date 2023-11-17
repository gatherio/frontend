import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";
import SkipButton from "../components/Atoms/SkipButton/SkipButton";

const Step3 = ({ step, setStep }: StepProps) => {
  return (
    <div className="step_container">
      <h1>Sync your calendar</h1>
      <p>You are now logged in as **email**</p>

      <p>Allow permission for GAther to sync your Google Calendar.</p>
      <Button onClick={() => setStep(step + 1)}>Allow</Button>
      <SkipButton text="Skip for now"/>
    </div>
  );
};

export default Step3;

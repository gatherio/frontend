import { StepProps } from "./types";
import Button from "../components/Atoms/Buttons/Button";
import LabeledInput from "components/Molecules/LabeledInput/LabeledInput";

const Step2 = ({ step, setStep }: StepProps) => {
  return (
    <div>
      <h1>Hey User</h1>
      <h1>Welcome to Gather</h1>

      <p>You are now logged in as **email**</p>
      <LabeledInput 
        label="First Name * "
        input={{name: "firstName", value: "", placeholder: "User First Name"}}
        />

      <LabeledInput 
        label="Last Name * "
        input={{name: "lastName", value: "", placeholder: "User Last Name"}}
        />
      <Button onClick={() => setStep(step + 1)}> Confirm </Button>
    </div>
  )
}

export default Step2;

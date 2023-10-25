import './LabeledInput.scss';
import React from 'react';
import Label from '../../Atoms/Label/Label';
import Input from '../../Atoms/Input/Input';

interface LabeledInputProps {
  input: {
    name: string;
    value: string;
    placeholder: string;
  }
  label: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ input, label }) => {
  const { name, value} = input;

  // Determine the input type based on the field name
  const isPasswordField = name === 'password';
  const inputType = isPasswordField ? 'password' : 'text';

  return (
    <div className='labeled-input'>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={inputType}
        name={name}
        value={value}
        placeholder={input.placeholder}
      />
    </div>
  );
};

export default LabeledInput;

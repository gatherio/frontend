import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "username",
    value: "",
    // onChange: () => {},
    // onBlur: () => {},
    // onFocus: () => {},
    placeholder: "Enter your username",
  },
};

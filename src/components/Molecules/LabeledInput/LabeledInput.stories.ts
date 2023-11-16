import type { Meta, StoryObj } from "@storybook/react";

import LabeledInput from "./LabeledInput";

const meta: Meta<typeof LabeledInput> = {
  title: "Molecules/LabeledInput",
  component: LabeledInput,
};

export default meta;

type Story = StoryObj<typeof LabeledInput>;

export const Primary: Story = {
  args: {
    input: {
      name: "username",
      value: "",
      // id: "username",
      placeholder: "Enter your username",
    },
    label: "Username:",
  },
};

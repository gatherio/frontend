import type { Meta, StoryObj } from "@storybook/react";
import Button from "./SkipButton";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "BUTTON",
    onClick: () => {},
  },
};

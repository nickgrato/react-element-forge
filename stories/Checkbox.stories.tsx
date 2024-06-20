import { type Meta, StoryObj } from "@storybook/react";
import Checkbox from "../src/components/Checkbox";
import "../src/styles/theme.scss";

const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: "Lable",
    disabled: false,
  },
};

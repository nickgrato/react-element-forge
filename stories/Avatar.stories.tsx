import { type Meta, StoryObj } from "@storybook/react";
import Avatar from "../src/components/Avatar";
import "../src/styles/theme.scss";

const meta: Meta<typeof Avatar> = {
  title: "Example/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: "https://api.dicebear.com/7.x/bottts/png?seed=chat",
    alt: "JD",
    size: 50,
  },
};

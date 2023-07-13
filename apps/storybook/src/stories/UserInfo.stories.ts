import type { Meta, StoryObj } from "@storybook/react";

import { UserInfo } from "ui";

const meta = {
  title: "Biolink/UserInfo",
  component: UserInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullUserInfo: Story = {
  args: {
    userInfo: {
      avatar: "/images/alex-nguyen.jpg",
      bio: "Play with Product",
      displayName: "Alex Nguyen",
    },
  },
};

export const NoAvatar: Story = {
  args: {
    userInfo: {
      bio: "Play with Product",
      displayName: "Alex Nguyen",
    },
  },
};

export const NoBio: Story = {
  args: {
    userInfo: {
      avatar: "/images/alex-nguyen.jpg",
      displayName: "Alex Nguyen",
    },
  },
};

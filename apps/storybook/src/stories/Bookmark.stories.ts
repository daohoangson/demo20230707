import type { Meta, StoryObj } from "@storybook/react";

import { Bookmark } from "ui";

const meta = {
  title: "BookmarkList/Bookmark",
  component: Bookmark,
  tags: ["autodocs"]
} satisfies Meta<typeof Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextUrl: Story = {
  args: {
    bookmark: {
      contentType: "TEXT",
      id: "text-url",
      importSource: "URL",
      metadata: {
        title: "How Notion Built A $2B SaaS Startup Through Community & Templates",
        description: "Those are the questions I was asking as I dove deeper and deeper into the growth strategies in play right now from Notion—the collaboration, productivity, spreadsheet, note-taking, pretty-much-everything SaaS tool. And they’re the questions I’m going to try to answer today.",
      },
      source: 'medium.com',
      url: "https://foundationinc.co/lab/notion-strategy",
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

export const TextNote: Story = {
  args: {
    bookmark: {
      contentType: "TEXT",
      id: "text-note",
      importSource: "TELEGRAM_FILE",
      metadata: {
        title: "Note",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum porta velit nec vehicula. Etiam arcu purus, mollis ut enim quis, vehicula finibus dui. Fusce ullamcorper felis ut elit rutrum, maximus convallis tellus tincidunt. In id pellentesque leo, ut sodales elit. Proin imperdiet tempor ante eu tincidunt. Donec quis mattis arcu, vel ullamcorper augue. Donec eget dapibus dolor. Cras varius magna id orci sodales, ac gravida dolor posuere. Donec placerat nisi nec orci ultrices lobortis.",
      },
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

export const Image: Story = {
  args: {
    bookmark: {
      contentType: "IMAGE",
      id: "image",
      importSource: "URL",
      metadata: {
        title: "A picture of a bear with a sheep head",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum porta velit nec vehicula. Etiam arcu purus, mollis ut enim quis, vehicula finibus dui. Fusce ullamcorper felis ut elit rutrum, maximus convallis tellus tincidunt. In id pellentesque leo, ut sodales elit. Proin imperdiet tempor ante eu tincidunt. Donec quis mattis arcu, vel ullamcorper augue. Donec eget dapibus dolor. Cras varius magna id orci sodales, ac gravida dolor posuere. Donec placerat nisi nec orci ultrices lobortis.",
      },
      url: "/images/A_picture_of_a_bear_with_a_sheep_head.jpg",
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

export const Video: Story = {
  args: {
    bookmark: {
      contentType: "VIDEO",
      id: "video",
      importSource: "TELEGRAM_FILE",
      metadata: {
        title: "video name.mp4"
      }
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

export const Audio: Story = {
  args: {
    bookmark: {
      contentType: "AUDIO",
      id: "audio",
      importSource: "URL",
      metadata: {
        title: "audio name.wav"
      }
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

export const Document: Story = {
  args: {
    bookmark: {
      contentType: "DOCUMENT",
      id: "document",
      importSource: "URL",
      metadata: {
        title: "document name.pdf"
      }
    },
    onViewDetail: (bookmark) => alert(`Viewing ${bookmark.id}...`),
  },
};

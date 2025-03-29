import type {Meta, StoryObj} from '@storybook/react';
import Badge from "@/ui/Badge/index.tsx";


const meta: Meta<typeof Badge> = {
    argTypes: {
        border: {
            type: 'boolean'
        },
        sizeBorder: {
            options: ["lg", "md", "sm"],
            control: {type: "select"}
        },
        text: {
            type: "string"
        }
    },
    component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        border: false,
        sizeBorder: "md",
        text: "Badge"
    }
};

export const SmBorder: Story = {
    args: {
        border: true,
        sizeBorder: "sm",
        text: "Badge"
    }
};

export const MdBorder: Story = {
    args: {
        border: true,
        sizeBorder: "md",
        text: "Badge"
    }
};

export const LgBorder: Story = {
    args: {
        border: true,
        sizeBorder: "lg",
        text: "Badge"
    }
};
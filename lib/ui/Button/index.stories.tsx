import type {Meta, StoryObj} from '@storybook/react';
import Index from "@/ui/Button/index.tsx";


const baseOptSize = ["lg", "md", "sm"]
const meta: Meta<typeof Index> = {
    argTypes: {
        borderStyle: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: 'select'},
        },
        border: {
            options: baseOptSize,
            control: {type: 'select'},
        },
        padding: {
            options: baseOptSize,
            control: {type: 'select'},
        }
    },
    component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Button",
        borderStyle: "outlined"
    }
};

export const Dashed: Story = {
    args: {
        borderStyle: "dashed",
        text: "Button",

    }
};

export const Filled: Story = {
    args: {
        text: "Button",
        borderStyle: "filled"
    }
};
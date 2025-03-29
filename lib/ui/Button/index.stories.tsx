import type {Meta, StoryObj} from '@storybook/react';
import Index from "@/ui/Button/index.tsx";


const baseOptSize = ["lg", "md", "sm"]
const meta: Meta<typeof Index> = {
    argTypes: {
        variant: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: 'select'},
        },
        borderWh: {
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
        variant: "outlined"
    }
};

export const Dashed: Story = {
    args: {
        variant: "dashed",
        text: "Button",

    }
};

export const Filled: Story = {
    args: {
        text: "Button",
        variant: "filled"
    }
};
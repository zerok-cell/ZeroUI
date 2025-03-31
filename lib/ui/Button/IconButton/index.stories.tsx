import type {Meta, StoryObj} from '@storybook/react';
import IconButton from "./index.tsx";


const baseOptSize = ["lg", "md", "sm"]
const meta: Meta<typeof IconButton> = {
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
    component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "",
        variant: "outlined"
    }
};

export const Dashed: Story = {
    args: {
        variant: "dashed",
        text: "",

    }
};

export const Filled: Story = {
    args: {
        text: "",
        variant: "filled",
        children: <p>ICON</p>
    }
};
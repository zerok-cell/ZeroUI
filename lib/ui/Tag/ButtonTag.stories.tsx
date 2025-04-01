import type {Meta, StoryObj} from '@storybook/react';
import ButtonTag from "@/ui/Tag/index.tsx";


const meta: Meta<typeof ButtonTag> = {
    argTypes: {
        text: {
            control: {type: 'text'},
        },
        borderStyle: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: 'select'},
        },
        selected: {
            control: "boolean"
        },
        sharp: {
            control: "boolean"
        }
    },
    component: ButtonTag,
} satisfies Meta<typeof ButtonTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Tag",
        sharp: true,
        borderStyle: "outlined",
        selected: false
    }
};

export const SelectedTag: Story = {
    args: {
        text: "Tag",
        sharp: true,
        borderStyle: "outlined",
        selected: true
    }
};

export const NoSharp: Story = {
    args: {
        text: "Tag",
        sharp: false,
        borderStyle: "outlined",
        selected: false
    }
};
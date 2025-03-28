import type {Meta, StoryObj} from '@storybook/react';

import Index from './index.tsx';

const meta: Meta<typeof Index> = {
    argTypes: {
        variant: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: 'select'},
        },
    },
    component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "d"
    }
};

export const Outlined: Story = {
    args: {
        variant: "dashed",
        text: "Button"
    }
};
import type {Meta, StoryObj} from '@storybook/react';

import CalendarButton from './CalendarButton';

const meta = {
    argTypes: {
        num: {control: {type: "number"}, description: "Число на кнопке", table: {type: {summary: "number"}}},
    },
    component: CalendarButton,
} satisfies Meta<typeof CalendarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
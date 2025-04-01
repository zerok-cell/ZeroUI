import type {Meta, StoryObj} from '@storybook/react';

import CalendarLine from './CalendarLine';

const meta = {
    argTypes: {
        size: {
            control: {
                type: 'number',
            }
        }
    },
    component: CalendarLine,
} satisfies Meta<typeof CalendarLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
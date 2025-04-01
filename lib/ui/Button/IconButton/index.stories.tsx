import type {Meta, StoryObj} from '@storybook/react';
import IconButton from "./index.tsx";

const baseOptSize = ["none", "xxs", "xs", "sm", "md", "lg", "xl", "xxl"]; // Обновлённые размеры
const meta: Meta<typeof IconButton> = {
    argTypes: {

        borderStyle: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: "select"},
            description: "Стиль границы кнопки.",
            table: {
                type: {summary: `"outlined" | "dashed" | "filled" | null`},
                defaultValue: {summary: "outlined"},
            },
        },
        border: {
            options: baseOptSize,
            control: {type: "select"},
            description: "Толщина границы кнопки.",
            table: {
                type: {summary: `"none" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"`},
                defaultValue: {summary: "sm"},
            },
        },
        padding: {
            options: baseOptSize,
            control: {type: "select"},
            description: "Внутренние отступы кнопки.",
            table: {
                type: {summary: `"none" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"`},
                defaultValue: {summary: "sm"},
            },
        },
    },
    component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
        borderStyle: "outlined"
    }
};

export const Dashed: Story = {
    args: {
        borderStyle: "dashed",
        children: "Button",

    }
};

export const Filled: Story = {
    args: {
        children: "Button",
        borderStyle: "filled"
    }
};
import type {Meta, StoryObj} from '@storybook/react';
import ButtonTag from "@/ui/Tag/index.tsx";


const meta: Meta<typeof ButtonTag> = {
    argTypes: {

        borderStyle: {
            options: ["outlined", "dashed", "filled", null],
            control: {type: "select"},
            description: "Стиль границы тега (outlined, dashed, filled).",
            table: {
                type: {summary: `"outlined" | "dashed" | "filled" | null`},
                defaultValue: {summary: "outlined"},
            },
        },
        selected: {
            control: {type: "boolean"},
            description: "Флаг выбора. Если true, тег отображается с выделенной границей.",
            table: {
                type: {summary: "boolean"},
                defaultValue: {summary: "false"},
            },
        },
        sharp: {
            control: {type: "boolean"},
            description: "Отображать ли символ `#` перед текстом.",
            table: {
                type: {summary: "boolean"},
                defaultValue: {summary: "false"},
            },
        },
        children: {
            control: {type: "text"},
            description: "Дополнительный контент внутри тега, например, HTML-элементы.",
            table: {
                type: {summary: "ReactNode"},
                defaultValue: {summary: "undefined"},
            },
        },
        border: {
            options: ["none", "sm", "md", "lg", undefined],
            control: {type: "select"},
            description: "Толщина границы, если выбрано.",
            table: {
                type: {summary: `"none" | "sm" | "md" | "lg" | undefined`},
                defaultValue: {summary: "undefined"},
            },
        },
    },
    component: ButtonTag,
} satisfies Meta<typeof ButtonTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Tag",
        sharp: true,
        borderStyle: "outlined",
        selected: false
    }
};

export const SelectedTag: Story = {
    args: {
        children: "Tag",
        sharp: true,
        borderStyle: "outlined",
        selected: true
    }
};

export const NoSharp: Story = {
    args: {
        children: "Tag",
        sharp: false,
        borderStyle: "outlined",
        selected: false
    }
};
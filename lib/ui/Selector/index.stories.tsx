import type {Meta, StoryObj} from '@storybook/react';

import Index from './index';
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {storyArgTypesGen} from "@/utils/stroyArgTypesGen.ts";
import {paddingSize} from "@s/padding/padding.css.ts";


const borderWidthStory = storyArgTypesGen("borderWidth", "select", borderWidth)
const borderStyleStory = storyArgTypesGen("borderStyle", "select", borderStyle)
const paddingStory = storyArgTypesGen("paddingSize", "select", paddingSize)
const meta = {
    argTypes: {
        ...borderWidthStory,
        ...borderStyleStory,
        ...paddingStory
    },
    component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => (
    <Index welcome={"Выберети язык"} options={["Python", "PHP", "JavaScript", "TypeScript", "Django"]}/>
);
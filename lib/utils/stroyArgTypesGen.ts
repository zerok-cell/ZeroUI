import {Control} from "@storybook/blocks";

export const storyArgTypesGen = (paramName, control: Control, data: object) => (
    {
        [paramName]: {
            options: Object.keys(data),
            control: {
                type: control,
            }
        }
    }
)
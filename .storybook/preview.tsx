import type { Preview } from '@storybook/react'
import React from 'react';

const preview: Preview = {
    decorators:[
        (Story)=>(
            <div style={{
                display:"flex",
                justifyContent:'center',
                alignItems:"center",
                height:"95vh",

            }}>
                <Story/>
            </div>
        )
    ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(),
    // dts({
    //   insertTypesEntry:true
    // }),
      dtsPlugin({
        tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"),
        insertTypesEntry:true,
      }),
    vanillaExtractPlugin({
      identifiers:({hash})=>`zeroui_${hash}`
    })

  ],
  build:{
    lib:{
      entry: path.resolve(__dirname,"src/index.ts"),
      name:"ZeroUI",
      formats:["es","umd"],
      fileName:(format)=> `zero-ui.${format}.js`
    },
    rollupOptions:{
      external: ["react", "react-dom", "@vanilla-extract/css"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@vanilla-extract/css": "@vanilla-extract/css",
        },
      },
    },
  }
})

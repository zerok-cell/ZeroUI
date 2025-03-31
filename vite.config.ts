import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";
import {libInjectCss} from "vite-plugin-lib-inject-css";
import purgeCssPlugin from "@mojojoejo/vite-plugin-purgecss";
import {globSync} from "glob"
import {fileURLToPath} from "url"
import {visualizer} from "rollup-plugin-visualizer";

const libName = "zeroui"


export default defineConfig({
    plugins: [react(),
        tsconfigPaths(),
        visualizer({
            filename: './stats.html',
            gzipSize: true
        }),
        libInjectCss(),
        purgeCssPlugin(),
        dts({
            exclude: ["lib/utils", "lib/css"],
            tsconfigPath: "tsconfig.app.json",
            include: ["lib"],
            insertTypesEntry: true,
        }),
        vanillaExtractPlugin()

    ],
    build: {

        copyPublicDir: false,
        lib: {

            entry: path.resolve(__dirname, "lib/main.ts"),
            name: libName,
            formats: ["es"]
            // formats: ["es"],
        },
        rollupOptions: {
            external: ['react', 'react-dom', "lib/**/index.ts", 'react/jsx-runtime'],
            input: Object.fromEntries(
                globSync(['lib/ui/**/index.tsx', 'lib/main.ts']).map((file) => {
                    // This remove `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    const entryName = path.relative(
                        'lib',
                        file.slice(0, file.length - path.extname(file).length)
                    )
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    const entryUrl = fileURLToPath(new URL(file, import.meta.url))
                    return [entryName, entryUrl]
                })
            ),

            output: {
                entryFileNames: '[name].js',
                assetFileNames: 'assets/[name][extname]',
                globals: {
                    react: 'React',
                    'react-dom': 'React-dom',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    }
})

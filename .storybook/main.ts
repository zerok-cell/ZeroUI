import type {StorybookConfig} from '@storybook/react-vite';
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";

const config: StorybookConfig = {
    "stories": [
        "../lib/**/*.mdx",
        "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test"
    ],
    viteFinal: async (viteConfig) => {
        // Если еще не добавлен, добавляем плагин для разрешения путей
        viteConfig.plugins = viteConfig.plugins || [];
        viteConfig.plugins.push(tsconfigPaths());

        // Настраиваем сервер так, чтобы он разрешал отдачу файлов из корня проекта и папки lib
        viteConfig.server = viteConfig.server || {};
        viteConfig.server.fs = {
            allow: [
                // Разрешаем доступ к корню проекта
                process.cwd(),
                // или, если требуется, можно добавить конкретный путь:
                path.resolve(process.cwd(), 'lib')
            ]
        };

        // Если нужно, можно явно указать корневую директорию
        // viteConfig.root = process.cwd();

        return viteConfig;
    },
    "framework": {
        "name": "@storybook/react-vite",
        "options": {}
    }
};
export default config;
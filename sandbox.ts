import {globSync} from "glob";
import path from "node:path";
import {fileURLToPath} from "url";

const entries = globSync(['lib/ui/**/index.tsx', "lib/**/index.ts", 'lib/main.ts']).map((file) => {
    const entryName = path.relative(
        'lib',
        file.slice(0, file.length - path.extname(file).length)
    )
    console.log(file)

    const entryUrl = fileURLToPath(new URL(file, import.meta.url))
    return [entryName, entryUrl]
})


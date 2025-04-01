<div align="center">

![ZeroUI](Readme/Header.svg)

</div>

# ✨ A little bit about the library

- This **component library** provides user-friendly,
- **medium-customizable** (via props) components.

---

# 🔥 Strengths

1. Zero runtime styles - Achieved by the Extract [**Vanilla library**](https://vanilla-extract.style/)
   It generates styles at the build stage, so you get ready-made css files.
2. **Minimalistic component** design - the library is not aimed at stunning design, it is aimed at their functionality,
   speed and simplicity.
3. Written in 100% TypeScript - What gives you typing in your projects.

# 📦 Install

Enter the command depending on the package manager you are using:<br>
`npm install @zeroui/zeroui` </br>
`yarn add @zeroui/zeroui`</br>
`pnpm install @zeroui/zeroui`

# 📖 Use

```typescript jsx
import {Button} from "@zeroui/zeroui"

const TestComponent = () => {
    return <Button text={"You text"}/>
}
```
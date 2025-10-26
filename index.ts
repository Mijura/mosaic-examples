import 'dotenv/config'
import { meteorologist, meteorologistWithTool } from "./dependencies"

const message = "I'm planning a weekend trip. What's the weather in Belgrade?"

const output = await meteorologist.response(message)
console.log("Answer →", output.text)
console.log("--------------------")

const exec = await meteorologistWithTool.response(message)
console.log("ToolCalls →", exec.toolCalls)
console.log("Answer →", exec.text)
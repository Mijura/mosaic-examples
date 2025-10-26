import { ToolSpec, ToolUse } from "@jigjoy-io/mosaic"

export class MeteorologistWithTool {

    constructor(private llm: ToolUse, private tools: ToolSpec[]) {}

    async response(userMsg: string) {
        return this.llm.withTools([{ role: "user", content: userMsg }], this.tools)
    }
}
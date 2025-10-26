import { TextGen } from "@jigjoy-io/mosaic"

export class Meteorologist {
    
    constructor(private llm: TextGen) {}

    async response(userMsg: string) {
        return this.llm.text([{ role: "user", content: userMsg }])
    }

}
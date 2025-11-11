import 'dotenv/config'
import { Mosaic, MosaicAgent } from '@jigjoy-io/mosaic'

const mosaic: Mosaic = {
    messages: [{
        role: 'system', 
        content: 'You are the weather assistent'
    }],
    task: 'What is the weather in Serbia',
    model: 'gpt-5'
}

const agent = new MosaicAgent(mosaic)
const response = await agent.act()
console.log(response)
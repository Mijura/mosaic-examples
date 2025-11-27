import 'dotenv/config'
import { Agent, Command } from '@jigjoy-io/mosaic'

async function testGpt51Model() {
    const request: Command = {
        model: 'gpt-5.1',
        messages: [{
            role: 'system',
            content: 'You are a concise but friendly travel planner.'
        }],
        task: 'Suggest a 2-day weekend trip near Berlin with a short itinerary.'
    }

    const agent = new Agent(request)
    const response = await agent.act()

    console.log('gpt-5.1 response:', response)
}

testGpt51Model().catch((error) => {
    console.error('OpenAI gpt-5.1 example failed:', error)
})



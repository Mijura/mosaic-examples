import 'dotenv/config'
import { gateway, InvocationRequest } from '@jigjoy-io/mosaic'

const request: InvocationRequest = {
    messages: [{
        role: 'system', 
        content: 'You are the weather assistent'
    }],
    prompt: 'What is the weather in Serbia',
    model: 'gpt-5'
}

const response = await gateway.invoke(request)
console.log(response)
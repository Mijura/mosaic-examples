import { ChatRequest, Endpoint } from '@jigjoy-io/mosaic/core'
import { ChatCompletion } from '@jigjoy-io/mosaic/providers/openai'

import 'dotenv/config'

const chat: ChatRequest = {
    messages: [{
        role: 'system', 
        content: 'You are the weather assistent'
    }],
    prompt: 'What is the weather in Serbia',
    model: 'gpt-5-nano'
}

const chatCompletion: Endpoint = new ChatCompletion()

const response = await chatCompletion.accept(chat)
console.log(response)
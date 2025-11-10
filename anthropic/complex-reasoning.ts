/**
 * Anthropic Claude Examples
 * 
 * Note: Requires ANTHROPIC_API_KEY in .env file
 * Get your API key from: https://console.anthropic.com/settings/keys
 */

import 'dotenv/config'
import { gateway, InvocationRequest } from '@jigjoy-io/mosaic'

// Using Claude Opus 4.1 for complex reasoning
async function complexReasoningExample() {
    console.log('\n=== Complex Reasoning with Claude Opus 4.1 ===\n')
    
    const request: InvocationRequest = {
        messages: [{
            role: 'system',
            content: 'You are an expert in software architecture and design patterns'
        }],
        prompt: 'Compare and contrast the Strategy pattern vs the State pattern. When should I use each?',
        model: 'claude-opus-4-1-20250805'
    }
    
    const response = await gateway.invoke(request)
    console.log(response)
}

// Run examples
async function main() {
    try {
        await complexReasoningExample()
    } catch (error) {
        console.error('Error:', error)
    }
}

main()
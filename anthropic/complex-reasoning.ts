/**
 * Anthropic Claude Examples
 * 
 * Note: Requires ANTHROPIC_API_KEY in .env file
 * Get your API key from: https://console.anthropic.com/settings/keys
 */

import 'dotenv/config'
import { Mosaic, MosaicAgent } from '@jigjoy-io/mosaic'

// Using Claude Opus 4.1 for complex reasoning
async function complexReasoningExample() {
    console.log('\n=== Complex Reasoning with Claude Opus 4.1 ===\n')
    
    const mosaic: Mosaic = {
        messages: [{
            role: 'system',
            content: 'You are an expert in software architecture and design patterns'
        }],
        model: 'claude-opus-4-1-20250805'
    }
    
    const agent = new MosaicAgent(mosaic)
    const response = await agent.act('Compare and contrast the Strategy pattern vs the State pattern. When should I use each?')
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
/**
 * Anthropic Claude Examples
 * 
 * Note: Requires ANTHROPIC_API_KEY in .env file
 * Get your API key from: https://console.anthropic.com/settings/keys
 */

import 'dotenv/config'
import { gateway, InvocationRequest } from '@jigjoy-io/mosaic'

// Simple prompt with Claude Sonnet 4.5
async function simpleExample() {
    console.log('\n=== Simple Claude Sonnet 4.5 Example ===\n')
    
    const request: InvocationRequest = {
        messages: [{
            role: 'system',
            content: 'You are a helpful AI assistant specialized in explaining complex topics simply'
        }],
        prompt: 'Explain quantum entanglement in 2-3 sentences for a beginner',
        model: 'claude-sonnet-4-5-20250929'
    }
    
    const response = await gateway.invoke(request)
    console.log(response)
}

// Run examples
async function main() {
    try {
        await simpleExample()
    } catch (error) {
        console.error('Error:', error)
    }
}

main()
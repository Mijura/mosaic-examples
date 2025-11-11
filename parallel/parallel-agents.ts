/**
 * Parallel Agent Execution Example
 * 
 * Demonstrates running multiple agents in parallel using Promise.all()
 * This example runs one OpenAI agent and one Anthropic agent simultaneously.
 * 
 * Note: Requires both OPENAI_API_KEY and ANTHROPIC_API_KEY in .env file
 */

import 'dotenv/config'
import { MosaicAgent, Mosaic } from '@jigjoy-io/mosaic'

async function parallelAgentsExample() {
    console.log('\n=== Parallel Agent Execution Example ===\n')
    console.log('Running OpenAI and Anthropic agents in parallel...\n')

    // Create OpenAI agent configuration
    const openaiRequest: Mosaic = {
        messages: [{
            role: 'system',
            content: 'You are a helpful AI assistant specialized in technology and programming'
        }],
        model: 'gpt-5'
    }

    // Create Anthropic agent configuration
    const anthropicRequest: Mosaic = {
        messages: [{
            role: 'system',
            content: 'You are a helpful AI assistant specialized in technology and programming'
        }],
        model: 'claude-sonnet-4-5-20250929'
    }

    const openaiAgent = new MosaicAgent(openaiRequest)
    const anthropicAgent = new MosaicAgent(anthropicRequest)

    const task = 'What are the key differences between TypeScript and JavaScript? Provide a concise answer.'

    // Execute both agents in parallel using Promise.all()
    const startTime = Date.now()
    
    const [openaiResponse, anthropicResponse] = await Promise.all([
        openaiAgent.act(task),
        anthropicAgent.act(task)
    ])

    const endTime = Date.now()
    const duration = endTime - startTime

    // Display results
    console.log('=== OpenAI Response (GPT-5) ===')
    console.log(openaiResponse)
    console.log('\n=== Anthropic Response (Claude Sonnet 4.5) ===')
    console.log(anthropicResponse)
    console.log(`\n=== Execution Time: ${duration}ms ===`)
    console.log('Note: Both agents ran in parallel, so total time is the longest individual request time.\n')
}

// Run example
async function main() {
    try {
        await parallelAgentsExample()
    } catch (error) {
        console.error('Error:', error)
        process.exit(1)
    }
}

main()


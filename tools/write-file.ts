import 'dotenv/config'
import { promises as fs } from 'fs'
import { Agent, Command, Tool } from '@jigjoy-io/mosaic'

const tools: Tool[] = [
    {
      name: 'write_file',
      description: 'Write text to a file.',
      schema: {
        type: 'object',
        properties: {
          filename: { type: 'string' },
          content: { type: 'string' }
        },
        required: ['filename', 'content']
      },
      async invoke({ filename, content }) {
        await fs.writeFile(filename, content, 'utf8')
        return { ok: true }
      }
    }
  ]

async function runWriteToFileExample() {
    const command: Command = {
        model: 'gpt-5.1',
        tools,
        messages: [
            {
                role: 'system',
                content: 'Save notes to disk using the tool, then confirm where the file was written.'
            }
        ],
        task: 'Create a two-bullet trip prep checklist for Belgrade and save it as trip-checklist.txt.'
    }

    const agent = new Agent(command)
    const response = await agent.act()
    console.log(JSON.stringify(response, null, 2))
}

runWriteToFileExample().catch((error) => {
    console.error('Write-to-file tool example failed:', error)
})


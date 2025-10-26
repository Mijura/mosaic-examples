# Mosaic Tool Usage Example

This example project uses [`@jigjoy-io/mosaic`](https://www.npmjs.com/package/@jigjoy-io/mosaic) to demonstrate how to run an LLM-powered agent — both standalone and with an attached **tool** (a function the agent can call to interact with the outside world).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npm run dev
```

## About

Mosaic provides a simple framework for composing AI agents that can reason, plan, and execute actions.  
In this example, you’ll learn how to configure an agent, attach a tool, and observe how the LLM decides when to invoke it during a conversation.

## Project Structure

```
├── src/
│   ├── agents/
│   │   └── meteorologist-with-tool.ts   # Example agent with a tool
│   ├── adapters/
│   │   └── openai/                      # OpenAI integration
│   └── examples/
│       └── index.ts                     # Entry point for examples
├── package.json
└── README.md
```

## Example Output

When running the app, you’ll see how the LLM responds differently depending on whether it has access to a tool — dynamically deciding when to call it and how to use its results.

---

**Learn more:**  
🧩 [@jigjoy-io/mosaic on npm](https://www.npmjs.com/package/@jigjoy-io/mosaic)  
💡 [JigJoy Platform](https://www.jigjoy.io)
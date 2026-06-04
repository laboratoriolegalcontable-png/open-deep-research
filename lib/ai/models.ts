export interface Model { id: string; label: string; apiIdentifier: string; description: string; }
export const models: Array<Model> = [
  { id: 'anthropic/claude-sonnet-4-5', label: 'Claude Sonnet 4.5', apiIdentifier: 'anthropic/claude-sonnet-4-5', description: 'Claude Sonnet 4.5 via OpenRouter' },
  { id: 'gpt-4o', label: 'GPT 4o', apiIdentifier: 'gpt-4o', description: 'For complex, multi-step tasks' },
] as const;
export const reasoningModels: Array<Model> = [
  { id: 'anthropic/claude-sonnet-4-5', label: 'Claude Sonnet 4.5', apiIdentifier: 'anthropic/claude-sonnet-4-5', description: 'Recomendado' },
  { id: 'deepseek/deepseek-r1', label: 'DeepSeek R1', apiIdentifier: 'deepseek/deepseek-r1', description: 'Open source' },
] as const;
export const DEFAULT_MODEL_NAME = 'anthropic/claude-sonnet-4-5';
export const DEFAULT_REASONING_MODEL_NAME = 'anthropic/claude-sonnet-4-5';

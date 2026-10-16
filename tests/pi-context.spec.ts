import { describe, expect, it } from 'vitest'
import type { Context } from '@earendil-works/pi-ai'
import { codexProviderContext } from '../src/pi-context.ts'

const user = { role: 'user' as const, content: 'fixture user message', timestamp: 0 }
const incoming = (value: unknown) => value as Context

describe('pi-ai transcript normalization', () => {
  it('folds legacy host prompt and tools into the leading transcript system message', () => {
    const tools = [{ name: 'fixture', description: 'test', parameters: { type: 'object' } }]
    const context: Context = { systemPrompt: 'instructions', messages: [user], tools }
    expect(codexProviderContext(context)).toEqual({
      messages: [{ role: 'system', content: 'instructions', toolsAdded: tools, timestamp: 0 }, user],
    })
    expect(context.messages).toEqual([user])
  })

  it('preserves an alpha host transcript with mid-conversation system messages', () => {
    const value = { messages: [
      { role: 'system', content: 'initial instructions', timestamp: 0 },
      user,
      { role: 'system', content: 'later update', sections: { note: 'preserve' } },
    ] }
    expect(codexProviderContext(incoming(value))).toEqual(value)
  })

  it('leaves an empty prompt and empty tools out of the transcript', () => {
    expect(codexProviderContext({ systemPrompt: '', messages: [user], tools: [] })).toEqual({ messages: [user] })
  })
})

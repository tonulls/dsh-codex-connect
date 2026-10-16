import { normalizeContext } from '@earendil-works/pi-ai/utils/transcript'
import type { Context, TranscriptContext } from '@earendil-works/pi-ai'

/** Normalize both legacy DSH contexts and alpha DSH transcripts for pi-ai 1.1. */
export function codexProviderContext(context: Context): TranscriptContext {
  return normalizeContext(context)
}

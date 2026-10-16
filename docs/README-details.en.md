# Codex Connect features and settings

This page contains the detailed information moved out of the main README. For the short install guide, see the [main README](../README.md); for complete technical detail, see the [reference](reference.md).

## Accounts and models

- The plugin can store up to 16 OAuth accounts on the DSH host. Select the active account manually; it does not rotate accounts or silently switch between them.
- The selected account applies to subsequent requests and is not bound to an individual session.
- The verified combination of this fork and DSH supports `gpt-6-astra` with Low, Medium, High, Xhigh, and Max reasoning levels. A model appearing in the list does not guarantee account access.
- Fast Mode is optional priority service for conversations. It is off by default; actual speed and quota use depend on the service.
- The interface displays server-provided `5h` and `7d` quota windows and does not invent missing values.

## Optional features

New optional settings are off by default. Configure them in **Settings → Plugins → Plugin configuration → Codex Connect** or **Settings → Models → Openai-Codex → More settings**, then save your changes.

| Feature | Setting | Behavior |
|---|---|---|
| Proxy | `enableProxy` | HTTP(S) proxy applies only to this plugin's requests. A proxy failure does not silently retry directly. |
| Codex Search | `enableSearch` | Switches the profile's search route to Codex; disabling restores the previous route. |
| Luna Reserve | `enableReserveFallback` | Uses hidden Reserve only when the server explicitly allows it for the active account. It does not change the default model or retry arbitrary `429` errors. |
| Image viewing | `enableImageTool` | Adds `view_image` for local files and validated public HTTP(S) images. |
| Image generation and editing | `enableImageGeneration` | Generates images or edits explicitly selected conversation images. Availability, dimensions, and quota depend on the account and service. |
| Auto-review | `enableAutoReview` | Sends bounded action context to ChatGPT for review after Harness policy requires approval. It does not bypass Harness approval; on failure, control returns to the user. |

## Storage and recovery

OAuth data is stored on the machine running DSH, at `$DSH_HOME/.openai-codex-auth.json` (usually `~/.dsh`). The plugin does not copy or modify `~/.codex/auth.json`. Removing the package does not delete DSH sessions, saved OAuth accounts, or generated image originals. Run `logout` only when you intend to delete authorization.

Cancelling a new authorization preserves existing accounts. A temporary token refresh error does not by itself delete an account. See [accounts and quota](reference.md#accounts-models-and-quota) and [search and images](reference.md#search-and-image-tools) for details.

## Frequently asked questions

### Why is a listed model failing?

Access depends on account permissions, DSH and plugin compatibility, network conditions, and service availability. A model catalog entry does not prove access. Check the exact compatibility information and run `doctor --json`.

### Can I assign a separate account to each session?

No. The active account applies to subsequent profile requests, not to an individual session. Fast Mode is configured per conversation.

### How do I move my accounts?

OAuth accounts are stored in the DSH home on the host running DSH. Use the same profile and data directory; do not copy or publish authorization files manually. Desktop and Web may use separate profiles.

### Can I keep the old `dsh-codex` plugin installed?

Not if both plugins are active in the same configuration: both register `openai-codex`. Follow the [migration guide](MIGRATION.md) and remove only a confirmed conflicting entry, not OAuth files or unrelated plugins.

### What does local diagnosis confirm?

`doctor` checks the local configuration and dependencies. It does not prove model access. Some separate capability probes may connect to the network and use quota; read their limitations in the [reference](reference.md) before running them.

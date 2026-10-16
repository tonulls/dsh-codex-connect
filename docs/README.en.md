# DSH Codex Connect

[Russian](../README.md) | English | [简体中文](README.zh.md)

## Short description

An independent Codex Connect fork that adds ChatGPT OAuth and the `openai-codex` model provider to [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). DSH manages sessions, tools, and permissions; this plugin provides Codex authorization, account selection, and optional features.

This community-maintained project is in Alpha and is not affiliated with OpenAI, ChatGPT, Codex, DeepSeek, or DeepSeek Harness. A ChatGPT subscription is not an OpenAI Platform API key.

## Installation and start

The current fork version is `0.2.0-alpha.4.1`; its verified pairing is DSH `0.2.1-alpha.4`. Compatibility with other version combinations has not been confirmed. Install this fork from the public [`tonulls/dsh-codex-connect`](https://github.com/tonulls/dsh-codex-connect/tree/tonulls) GitHub repository, using the same profile that you use to run DSH.

Requirements: Node.js `^22.19.0` or `>=24.0.0`, and an installed DSH CLI. This branch can change over time, so installing from it selects the current `tonulls` branch state rather than an immutable npm release.

1. Make sure `dsh` is available and you know which profile DSH uses. The example below uses `web`.
2. Install the plugin from the `tonulls` branch:

   ```sh
   dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-codex-connect.git#tonulls'
   ```

   A GitHub installation builds the plugin. If pnpm reports blocked dependency build scripts, add only the packages named by DSH to `allowBuilds`, then retry the install.

3. Start the web interface with the same profile:

   ```sh
   dsh web
   ```

4. In DSH, open **Settings → Plugins → Plugin configuration → Codex Connect**, authorize in the browser, and select the active account. Then choose an `openai-codex` model in the model picker.

Replace `web` with your profile name in each command. OAuth data lives on the machine running DSH, so use the same profile and data directory where your accounts are stored. Do not publish authorization links, codes, tokens, or account identifiers.

## Check and diagnose

<details>
<summary>Show check and diagnostic commands</summary>

Check the DSH version and plugin state:

```sh
dsh --version
dsh plugin --profile web exec dsh-codex-connect status --json
dsh plugin --profile web exec dsh-codex-connect doctor --json
```

`status --json` reports whether you are signed in and does not start OAuth. `doctor --json` checks the local installation without a network request or raw OAuth secrets. If the plugin does not appear in DSH, confirm that commands use the intended profile and that the Git installation completed its build.

Remove account labels and any secrets before sharing command output. See the [diagnostics reference](reference.md) for details.

</details>

## Stop or uninstall

<details>
<summary>Show how to stop DSH or remove the plugin</summary>

- If DSH is running in a terminal, stop it with `Ctrl+C`.
- If DSH was started by the VS Code extension, use the DSH stop command in the extension panel or status bar.
- To remove only the plugin from the `web` profile, run:

  ```sh
  dsh plugin --profile web remove dsh-codex-connect
  ```

Removing the plugin does not delete DSH sessions or saved OAuth accounts. Do not run `logout` or delete profile files if you want to preserve authorization. Signing out of all accounts is a separate action that removes saved OAuth data.

</details>

## Documentation and development

- [Features, settings, and FAQ](README-details.en.md)
- [Detailed installation and compatibility](INSTALL.md)
- [Settings, diagnostics, and recovery](reference.md)
- [Migration from `dsh-codex`](MIGRATION.md)
- [Architecture and security](design.md)
- [Auto-review](auto-review.md)
- [Development and maintenance](CONTRIBUTING.md)
- [Русская версия README](../README.md)
- [Chinese README](README.zh.md)
- [Source code and changes](https://github.com/tonulls/dsh-codex-connect)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## Acknowledgements and license

We thank the original Codex Connect developers for the foundation and their work, and Yan-Zero for the original `dsh-codex` project. We preserve their contributions and the corresponding attribution. License and attribution details are in [NOTICE](../NOTICE) and [LICENSE](../LICENSE).

🛠️ Modified with Codex

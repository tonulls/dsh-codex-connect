# DSH Codex Connect

[Русский](../README.md) | [English](README.en.md) | 简体中文

## 简介

Codex Connect 的独立社区分支，为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 添加 ChatGPT OAuth 登录和 `openai-codex` 模型提供方。会话、工具和权限由 DSH 管理；本插件负责 Codex 授权、账户选择和可选功能。

本项目处于 Alpha 阶段，由社区维护；与 OpenAI、ChatGPT、Codex、DeepSeek 或 DeepSeek Harness 均无隶属关系。ChatGPT 订阅不等于 OpenAI Platform API 密钥。

## 安装与启动

当前分支版本为 `0.2.0-alpha.4.1`，已验证的 DSH 版本为 `0.2.1-alpha.4`。其他版本组合尚未确认兼容。请从公开的 [`tonulls/dsh-codex-connect`](https://github.com/tonulls/dsh-codex-connect/tree/tonulls) 仓库安装，并使用启动 DSH 时相同的 profile。

要求：Node.js `^22.19.0` 或 `>=24.0.0`，并已安装 DSH CLI。该分支会持续更新；从分支安装会获取 `tonulls` 当前提交，而不是不可变的 npm 版本。

1. 确认 `dsh` 命令可用，并确定 DSH 使用的 profile。以下示例使用 `web`。
2. 从 `tonulls` 分支安装插件：

   ```sh
   dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-codex-connect.git#tonulls'
   ```

   从 GitHub 安装时会构建插件。如果 pnpm 提示依赖构建脚本被拦截，请只将 DSH 提示的包加入 `allowBuilds`，然后重试安装。

3. 使用相同的 profile 启动 Web 界面：

   ```sh
   dsh web
   ```

4. 在 DSH 中打开**设置 → 插件 → 插件配置 → Codex Connect**，在浏览器中完成授权并选择活动账户。然后在模型选择器中选择 `openai-codex` 模型。

请在所有命令中将 `web` 替换为你的 profile。OAuth 数据保存在运行 DSH 的主机上；请使用已有账户所在的 profile 和数据目录。不要公开授权链接、验证码、令牌或账户标识。

## 检查与诊断

<details>
<summary>显示检查与诊断命令</summary>

检查 DSH 版本和插件状态：

```sh
dsh --version
dsh plugin --profile web exec dsh-codex-connect status --json
dsh plugin --profile web exec dsh-codex-connect doctor --json
```

`status --json` 报告当前是否已登录，不会启动 OAuth。`doctor --json` 在本地检查安装，不发送网络请求，也不输出原始 OAuth 密钥。如果 DSH 中没有显示插件，请确认命令使用了正确的 profile，且 Git 安装和构建已成功。

分享命令输出前，请删除账户标签和所有密钥。更多信息请参阅[诊断参考](reference.zh.md)。

</details>

## 停止或卸载

<details>
<summary>显示如何停止 DSH 或卸载插件</summary>

- 如果 DSH 在终端中运行，请按 `Ctrl+C` 停止。
- 如果由 VS Code 扩展启动，请使用扩展面板或状态栏中的 DSH 停止命令。
- 仅从 `web` profile 中卸载插件：

  ```sh
  dsh plugin --profile web remove dsh-codex-connect
  ```

卸载插件不会删除 DSH 会话或已保存的 OAuth 账户。如果要保留授权，请勿运行 `logout` 或删除 profile 文件。退出所有账户是单独操作，会删除已保存的 OAuth 数据。

</details>

## 文档与开发

- [功能、设置与常见问题](README-details.zh.md)
- [详细安装与兼容性](INSTALL.md)
- [设置、诊断与恢复](reference.zh.md)
- [从 `dsh-codex` 迁移](MIGRATION.md)
- [架构与安全](design.zh.md)
- [自动审查](auto-review.zh.md)
- [开发与维护](CONTRIBUTING.md)
- [源代码与变更](https://github.com/tonulls/dsh-codex-connect)

## Donate

🔹EVM:      ``0x6Ad56B8C723140ACb43F6070Af2102A98F28A72C``

🔹BTC:      ``bc1qvp9mx5w6m0gv022p0xdde5qqmzfyd4yuys6c93``

🔹TRON:     ``TLLUSBZBLb7x994TH1eYrDZhmLFPBLZSrv``

🔹SOLANA:   ``8p5FjXzNYraUvckfzNt37ZRCzx36pd2SWdVvRErTkMyH``

🔹GRAM-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

🔹USDT-TON: ``UQD1gNMVhlJewKXMUY1E3_bedZsc-ktzt8ZxZCUhzrcEcPyg``

## 致谢与许可

感谢 Codex Connect 原始开发者的基础工作，以及 Yan-Zero 的 `dsh-codex` 项目。我们保留其贡献和相应版权信息。许可证与署名详情见 [NOTICE](../NOTICE) 和 [LICENSE](../LICENSE)。

🛠️ 使用 Codex 修改

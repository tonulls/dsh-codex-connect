# Codex Connect contributor guide

## Start with the task

Read [the current maintenance scope](docs/maintenance-scope.md) before roadmap or experimental work. Adaptive Task, automatic delegation and unproven optimizations are frozen; archived evaluation plans are not instructions to resume. Preserve shared safety/recovery code and existing user data. Concrete defects remain separately actionable.

Verify the repository, branch, HEAD and existing changes. Preserve unrelated work.
Read only the relevant additional material:

- Compatibility or releases: `compatibility.json`, `verified-compatibility.json`, then the relevant checker and `docs/RELEASING.md` when release work is authorized.
- Native compaction: inspect the active implementation and its focused tests; historical research notes are kept only in the local archive.
- Model-visible instructions: inspect the affected source/tests.
- Product architecture: the relevant section of `docs/design.md`.

## Work and verification

Implement within the requested scope and validate the changed behavior. Use focused tests while iterating; run the full check for runtime changes before delivery. Documentation-only changes do not require repeating unrelated model or host matrices.
Ordinary local synthetic fixtures are not live-account acceptance. Record exact source/runtime identity, command outcome and remaining limitations. Never reuse an old passing head as current evidence.

## Boundaries

Keep experimental defaults off and preserve host-owned permissions, cancellation and durability. Prompts cannot grant authority.
Do not read real credentials, call live models, change daily services, push, merge, publish or deploy without authorization for that action and target.
After a denied operation, stop it and dependent work; do not change execution channels to achieve the same outcome. Continue independent, already-authorized work and report the blocker.
Separate implemented, merged, released, enabled and accepted states in the closeout.

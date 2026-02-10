# Deploy via FTP - Teste 3 ✅

## Objetivo
Fix the GitHub Actions deploy failure shown in the screenshot:

- `[INPUTS] sshPrivateKey is mandatory`
- `[INPUTS] remoteHost is mandatory`
- `[INPUTS] remoteUser is mandatory`

This indicates the deploy action isn’t receiving the SSH credentials/host/user values at runtime.

---

## What’s happening (root cause)
In `.github/workflows/deploy.yml`, the `easingthemes/ssh-deploy@v5.1.0` step is currently passing values using `with:`:

```yml
- name: Deploy via SSH
  uses: easingthemes/ssh-deploy@v5.1.0
  with:
    SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
    REMOTE_HOST: ${{ secrets.SSH_HOST }}
    REMOTE_USER: ${{ secrets.SSH_USER }}
    ...
```

However, the action’s official documentation for v5.x instructs passing configuration via environment variables (`env:`). In practice, this action reads from environment variables (e.g., `process.env.SSH_PRIVATE_KEY`) rather than GitHub “inputs”, so the values end up empty and the action throws “mandatory” errors.

---

## Planned changes (code)
### 1) Update the deploy step to use `env:` (not `with:`)
In `.github/workflows/deploy.yml`, change:

- `with:` block → `env:` block
- Keep the same secret names you already created: `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`, `SSH_PORT`

Resulting step will look like:

- `uses: easingthemes/ssh-deploy@v5.1.0`
- `env:`
  - `SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}`
  - `REMOTE_HOST: ${{ secrets.SSH_HOST }}`
  - `REMOTE_USER: ${{ secrets.SSH_USER }}`
  - `REMOTE_PORT: ${{ secrets.SSH_PORT }}`
  - `SOURCE: dist/` (keep trailing slash)
  - `TARGET: ~/public_html/` (or switch to an absolute remote path if Hostinger requires it)
  - `ARGS: -rlgoDzvc -i --delete`

### 2) (Optional but recommended) Add a quick “preflight” validation step
Add a small shell step right before deploy that fails fast if any required secret is missing (without printing secret contents). This makes the error clearer than the action’s generic message.

Example logic:
- If `${{ secrets.SSH_PRIVATE_KEY }}` is empty → `exit 1` with message “Missing SSH_PRIVATE_KEY”
- Same for host/user/port

### 3) (Optional) Add manual trigger support
If you want to be able to click “Run workflow” anytime, add:

```yml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

This is optional; your current pipeline still works on push to `main`.

---

## Verification checklist (after implementation)
1. Push a small commit to `main` (or run manually if `workflow_dispatch` was added).
2. In GitHub → Actions → open the latest run:
   - “Deploy via SSH” should no longer complain about missing inputs.
   - You should see rsync output and a successful exit.
3. Confirm on Hostinger that `public_html` has the fresh `dist/` output (timestamp or updated asset hashes).
4. Load the website and hard refresh to ensure new assets are served.

---

## Edge cases / If it still fails
- If it still claims missing inputs after switching to `env:`:
  - Confirm the secrets are created in the same repository where the workflow is running (not a different repo/org-level secret set).
  - Confirm it’s running on a `push` to `main` (secrets are not available to workflows triggered from forks/PRs in many setups).
- If rsync connects but deploy goes to the wrong folder:
  - Replace `TARGET: ~/public_html/` with Hostinger’s absolute path for that user (commonly `/home/<SSH_USER>/public_html/`).

---

## Files involved
- `.github/workflows/deploy.yml` (edit deploy step; optionally add preflight + workflow_dispatch)


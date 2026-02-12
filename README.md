# Will you be my Valentine? 💕

A small React app to ask your valentine with a cute heart, runaway "No" button, and a reveal when they say Yes.

---

## Deploy to GitHub Pages (so you can send the link to your valentine)

1. **Create a GitHub repo** (e.g. `would_you`) and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/would_you.git
   git branch -M main
   git push -u origin main
   ```

2. **Turn on GitHub Pages:**
   - Open the repo on GitHub → **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **If your repo name is not `would_you`**, set the same base in `vite.config.js`:
   - Change `base: '/would_you/'` to `base: '/YOUR_REPO_NAME/'`.

4. **Deploy:** The workflow runs on every push to `main`. After it finishes (Actions tab), your site will be at:
   - **https://YOUR_USERNAME.github.io/would_you/**  
   (use your repo name instead of `would_you` if you used a different one).

5. **Send that link to your valentine.**

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

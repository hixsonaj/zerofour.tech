# zerofour.tech

Personal portfolio site (Create React App, React Router v6). Live at https://zerofour.tech.

## Local dev

- `npm start` serves on port 3000 by default. `.claude/launch.json` pins the preview to port 3001 so it doesn't collide with the alexhixson.com dev server.
- Blog posts live in `src/blog/posts.json`. `type: "article"` shows an excerpt on the home page and links to `/blog/<slug>`; `type: "linkedin"` shows full text with a "via LinkedIn" link. A new article also needs an explicit route in `src/App.js`.

## Deploying

Hosting is GoDaddy shared hosting. Deploys are manual: build, then `scp` to the server. Do not deploy without the user asking.

```
npm run build
scp -o BatchMode=yes -r build/* <SSH_TARGET>:public_html/
```

- `SSH_TARGET` is in the alexhixson.com repo at `sites/alex.env`. Auth is key-based, so the machine running this needs its key authorized on the host.
- `public_html/` is the zerofour.tech document root. It also contains subfolders `alexhixson.zerofour.tech/` and `leahhixson.zerofour.tech/`, which are separate sites deployed from the alexhixson.com repo. Never delete or overwrite those.
- Always use `build/*`, never `build/`. The glob skips dotfiles on purpose.
- **Never upload `.htaccess` from this repo.** The live `public_html/.htaccess` routes alexhixson.com and leahhixson.com to their subfolders, serves SSL validation files, and contains the SPA fallback. `public/.htaccess` in this repo is only the simple SPA fallback, so overwriting the live one breaks the other domains.
- SCP does not delete files, so old hashed bundles in `static/js/` pile up on the server. This is harmless.
- After deploying, verify with `curl -sI https://zerofour.tech/<path>` and confirm https://alexhixson.com still loads.

## Gotchas

- `public/Alexander_Hixson_Resume.pdf` is what ships. Replacing the file only on the server gets overwritten by the next deploy, so update it here too.
- The React Router catch-all `*` route falls back to Home, so unknown URLs show the home page instead of a 404.
- Browsers cache the resume PDF aggressively; a stale copy usually means hard-refresh, not a failed upload.

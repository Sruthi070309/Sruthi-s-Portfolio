# Sruthi S, Portfolio

React + Vite + React Router. Four pages: Home, Work, About, Contact.

## Run
```bash
npm install
npm run dev
```

## Edit your content
- Words, skills, education, experience: `src/data/profile.js`
- Projects: `src/data/projects.js` (add repo links in the `links` arrays)
- Portrait: an illustration in `src/components/Avatar.jsx` (see `Portrait.jsx` if you ever want to use a photo)
- Colours and fonts: the variables at the top of `src/styles.css`

## Put it online (GitHub Pages)
```bash
npm install -D gh-pages
```
Add to package.json scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`, then `npm run deploy` and set Pages to the `gh-pages` branch.

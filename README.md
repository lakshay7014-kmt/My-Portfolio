# AgentFlow Portfolio

A calm, workflow-inspired personal portfolio for Lakshay Kumawat.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Use `npm run build` for production output.

## Edit content

Update personal details, skills, projects, timeline, socials, robot images and chatbot answers in `src/data/portfolio.js`.

## Robot images

Place optional images in `src/assets/robots/`:

- hero-robot.png
- about-robot.png
- skills-robot.png
- projects-robot.png
- contact-robot.png
- sleepy-robot.png

Missing files automatically use an accessible SVG fallback.

## EmailJS

Copy `.env.example` to `.env.local` and set:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_AI_ENDPOINT=
```

The contact template should accept `from_name`, `reply_to`, and `message`.

## Optional AI endpoint

Set `VITE_AI_ENDPOINT` to a server-side route that accepts `{ "message": "..." }` and returns `{ "answer": "..." }`. Keep provider credentials on the server, never in `VITE_*` variables.

## Deploy

### Vercel

Use build command `npm run build` and output directory `dist`.

### GitHub Pages

Set `base: '/<repository-name>/'` in `vite.config.js` for a repository subpath, then publish `dist/` through GitHub Pages Actions.

## TODO

- Replace the GitHub placeholder.
- Add `src/assets/profile.jpg` if needed.
- Add `public/resume.pdf`.
- Replace project URLs and add screenshots.
- Add the robot images.
- Configure EmailJS keys.

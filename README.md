<h1>Positivus Landing Page</h1>
<p>This project deveopment using React.js, Vite and Tailwind CSS for learning design website</p>

<h1>Install Vite</h1>

```bash
npm create vite@latest my-project -- --template react
cd my-project
npm install
npm run dev
```
<h1>Install Tailwind CSS</h1>

```bash
  npm install tailwindcss @tailwindcss/vite
```
<h1>Configure the Vite plugin</h1>
Add the @tailwindcss/vite plugin to your Vite configuration.

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

```bash
@import "tailwindcss";
```
Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.
```bash
npm run dev
```
Start using Tailwind in your HTML
Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.

```bash
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
![Home](https://github.com/user-attachments/assets/57970942-17e5-4f8c-88fa-e1c232de1e68)
<h1>Credit</h1>
Original design by <a href="https://www.figma.com/@olgaaverchenko">Olga</a>. Downloaded from <a href="https://www.figma.com/community"> Figma Community.</a>

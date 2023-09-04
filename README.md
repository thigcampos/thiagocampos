# Euskadi

Euskadi is a website designed and developed by and for me. It was built with NextJS and ContentLayer, and includes the base version of my web component library Ionique, which is still under development.

## Technologies
TD;LR: Eusakdi was developed using NextJS, with TypeScript and SCSS support, ContentLayer, to handle markdown files, and kBar.

### NextJS (TS + SCSS)

### Content Layer

### Extras

**kBar**

## Future Implementations
Euskadi has been developed at a really fast pace, so some features that I would have liked to have have not been implemented in this 0.1 version, but they will be added in future updates.

### Support more languages + DeepL API
Besides en-US and pt-BR, I'd like to support es-ES and fr-FR. For blog posts, I might use DeepL API to automatically localize all blog posts from en-US to pt-BR, es-ES and fr-FR.

### Design Philosophy
Content-driven design

## Deploy on Cloudflare

Euskadi has been deployed on Cloudflare Pages. To achieve this, the installation of some packages was required:

```js
npm install --save-dev @cloudflare/next-on-pages
```

You can refer to the complete tutorial and troubleshooting guide on Cloudflare Pages for deploying a Next.js website.
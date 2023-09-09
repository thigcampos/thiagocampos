# Iukeri
Iukeri represents the culmination of three years of continuous redesign. Every minor change in my life prompted a new iteration of the site's design, turning it into a never-ending in-development project.  

### Design
In early 2023, I began conceptualizing the core structure of Iukeri, drawing inspiration heavily from the websites of [Yaroslav Samoylov](https://yaosamo.com) and [Danilo Tanic](https://danilotanic.com). Over the following months, the design underwent numerous subtle updates, each influenced by a variety of sources. These sources ranged from my [Bossa & Café](https://open.spotify.com/playlist/6unyax6qQyhunvOd2QOAzB?si=0b069d34368f4773) Spotify playlist to episodes of [London Diaries](https://youtube.com/playlist?list=PL3F8c49z5qlQkQOwZLYN_4Q03cEneiOlG&si=yAoGu0mkeaz-soJh) by Daniel Simmons, as well as handpicked [Vintage Ads](https://www.pinterest.fr/thigcampos/iukeri/) discovered on Pinterest. Additional changes were made during the website's development, with more likely to come in the months and years ahead.

### Development
As for the development of the website, the technical scope involves using [NextJS](https://nextjs.org) with TypeScript. For the back-end, a straightforward blog system developed using FastAPI, named [Papyrus](https://github.com/ivansantiagojr/papyrus). After outlining the initial application infrastructure, I made the decision to start with a front-end-only application as the initial phase of the MVP. To replace Papyrus in the MVP, I tried using [mdx-remote](https://github.com/hashicorp/next-mdx-remote), but I had some problems. After doing some research, I did the initial setup of [ContanteLayer](https://contentlayer.dev/) and it worked like a charm.

### Deployment
The deployment of the MVP version of Iukeri was carried out on Cloudflare Pages. It was a straightforward process, as Cloudflare offers a guide for deploying various types of applications, including [NextJS Apps](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site).

## Roadmap
- [X] Initial Setup with NextJS;
- [X] Markdown Support;
- [X] `Blog` and `About Me` pages;
- [ ] `Projects` page;
- [ ] Improve `About Me` page perfomance;
- [ ] Dark Mode;
- [ ] Tags system;
- [ ] Searchs for specific post;
- [ ] Support for pt-BR and es-ES; 
- [ ] Support for it-IT and fr-FR;


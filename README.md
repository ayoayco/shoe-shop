# Scalable Shoe Shop

An e-commerce page as a demonstration of using [Astro](https://astro.build) as shell for a microfrontends application.

<img src="https://raw.githubusercontent.com/ayoayco/shoe-shop/main/assets/sss-ss.png" alt="Scalable Shoe Shop Screenshot " />

## About

Each app is a node workspace to allow for running common commands easily and developing libraries they can install as dependency (e.g., `utils`). In a real-world setting they could be maintained in separate repositories by different teams.

This demo takes advantage of EcmaScript Modules (ESM) and url-imports to do client-side composition of microfrontends. Express is used for serving assets, but ideally one would have a dedicated CDN hosting them.


### Code structure
1. `app-heading` & `app-cart` are React apps
2. `app-products` are a SolidJS app
3. `app-shell` is an Astro app
4. `utils` is a library for utilities that the micro-frontend apps can install as dependency

### Background

This project was initially forked from [this repo](https://github.com/sasoria/astro-microfrontends), then moved here for a cleaner history. Massive thanks to [sasoria](https://github.com/sasoria) for his work on the initial demo.

## Features

- ✨ Client-side composition of microfrontends
- 📦 Multiframeworks with Astro Islands
- 🚀 SSG/SSR supported by Astro

## Usage

### Micro frontends

- Build each micro frontend with `npm run build`
- Start each micro frontend with `npm run preview`

For production you would start the node server in the `server` folder, after building.

### Shell

- Build the shell with `npm run build`
- Start the shell with `npm run preview`

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and gets cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.

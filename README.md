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

DX in this demo is not that easy, because we are simulating the development of multiple apps that in reality would have separate delivery pipelines and possibly maintained by different teams.

Currently each app has a `build:preview` script that represents the process of building & deploying them, ideally in a CDN.

Open the app-shell and each MF app (i.e., app-cart, app-heading, app-products) in a separate terminals and run "npm run build:preview" for each.

You have to rerun this for any app you modify.

You will see the benefit of this in scale as you don't need to rebuild a single big app for changes only in smaller frontend parts.

## Shared dependencies

Dependencies such as react and react-dom are shared across applications. They are fetched from [esm.sh](https://esm.sh/) and gets cached in the browser, reducing the bundle size. Each app can share other dependencies as well through url imports.

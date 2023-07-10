# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```sh
pnpm i
```

## Local Development

```sh
pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

To develop with `zh-Hant` locale, run:

```sh
pnpm run start:zh
```

## Build

```
pnpm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

If you want to deploy the distribution under path other than `/2023/`, you can pass the environment variable `BASE_URL` to the build command:

```sh
BASE_URL=/ pnpm run build
```

# Nx + Angular + Webpack Module Federation

The code in this repository is almost entirely generated by following Nx's documentation on [Advanced Angular Micro Frontends with Dynamic Module Federation](https://nx.dev/recipes/angular/dynamic-module-federation-with-angular), aside from some small script additions in `package.json` and a local HTTP server to host the Angular applications using Express to demonstrate production usage of this technology.

## Prerequisites

Install NPM dependencies with

```
npm install
```

## Starting the development server

Start the development server with

```
npm run dev
```

This command runs `nx serve` for the `host` app, and also serves any remote dependencies or micro-frontends (MFE) (`mfe-1` in this case).

## Starting the production server

Start the local server with

```
npm run start
```

which has a `prestart` script that runs

```
npm run build
```

which build _all_ apps.

**Note: running `nx build host` _only_ builds the host app, and skips remote dependencies**

### Notes on the local server

1. The local server statically hosts all apps on their respective port equal to those of the development environment, but these can be configured differently.

2. The host app (available at `http://localhost:4200`) fetches remote dependency `mfe-1` at runtime from `http://localhost:4201` when clicking the link to `http://localhost:4200/mfe-1` (which loads the remote module entry point of `mfe-1`). In short, `mfe-1` is available both at `http://localhost:4200/mfe-1` and `http://localhost:4201`. See image below for a visualisation of the availability of the apps.

   <img src="nx-angular-mfe-example-diagram.png" width="480" height="auto">

3. Points 1. & 2. together result in the ability to separately build and host all applications and microfrontends. As an example, the following scenario is true for this set-up:

   a. Start the local server with `npm run start`

   b. Make a change in the template of `mfe-1/src/app/remote-entry/entry.component.ts`

   c. No changes are visible at `http://localhost:4200/mfe-1` and `http://localhost:4201`

   d. Run `nx build mfe-1`

   e. Changes in app `mfe-1` are visible at the URLs mentioned in point c. without rebuilding `host`

# module-federation-sample

This is a minimal demonstration of the power of Module Federation.

## Special Branches

- `one/initial-setup`: The raw monorepo before we start federating modules between builds
- `two/federating-between-modules`: Federation between landing page and main page
- `three/component-library`: Delivery of components via a separated library
- `four/dynamic-remotes`: Delivery of components at point of need through webpack 5

## Installation

```bash
# If using PNPM
pnpm recursive install

# If using Yarn
yarn
```

## Build

```bash
# If using PNPM
pnpm run build

# If using Yarn
yarn build
```

## Run DevServer

```bash
# If using PNPM
pnpm run dev

# If using Yarn
yarn dev
```

## Run DevServer in production mode

```bash
# If using PNPM
pnpm run start

# If using Yarn
yarn start
```

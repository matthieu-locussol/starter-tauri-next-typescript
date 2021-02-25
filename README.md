# Starter web using Tauri, Typescript & Next.js

This starter is based on my personal preferences and has been made to provide a template for building web applications using React, Next.js and Typescript. Cross-platform desktop application building support comes with Tauri. I am using Yarn and Node v12.1.0 with this starter. It comes with:

- Tauri 0.11
- Prettier (and my own prettier configuration in `.prettierrc.json`)
- ESLint (and my own eslint configuration in `.eslintrc.json`)
- Typescript (and my own typescript configuration in `tsconfig.json`)

This starter also includes `pre-commit` as a dependency in order to run ESLint before every commit to make sure the code that will be pushed follows the rules defined in the configuration.

# Installation

Clone the repository & install dependencies:

```bash
git clone git@github.com:matthieu-locussol/starter-tauri-next-typescript.git
yarn install
```

## Install Rust

*This process will install Rust & Tauri Bundler globally on your machine. It does not matter where you execute these commands.*

### Linux & MacOS ([Link to Tauri's official setup guide](https://tauri.studio/en/docs/getting-started/setup-linux))

If you don't have Rust installed:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

If you already have Rust installed, make sure it is up-to-date:

```bash
rustup update stable
```

Finally, install Tauri Bundler:

```bash
cargo install tauri-bundler --force
```

***Note:** if you use WSL, an additional step is required to be able to run a graphical application: [see this article from Tauri's official setup guide for WSL](https://tauri.studio/en/docs/getting-started/setup-linux#5-for-windows-subsystem-for-linux-wsl-users)*

### Windows

[See Tauri's official setup guide for Windows](https://tauri.studio/en/docs/getting-started/setup-windows)

# Usage

| Command            | Meaning                                                       |
|--------------------|---------------------------------------------------------------|
| `yarn dev`         | Run your app in development mode in the browser               |
| `yarn build`       | Build your app for production                                 |
| `yarn start`       | Run your app in production (uses the build from `yarn build`) |
| `yarn tauri dev`   | Run your app in development mode on your machine (native app) |
| `yarn tauri build` | Build your app in production mode (native app)                |

***After `yarn tauri build`, generated executables can be found in `src-tauri/target/release/bundle`.***
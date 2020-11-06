<p align="center">
  <img
    alt="Freedomhood"
    src="https://raw.githubusercontent.com/matteobertoldo/freedomhood/master/src/svg/freedomhood.svg?sanitize=true"
    width="320"
  />
</p>

<p align="center">
  <a href="https://travis-ci.com/matteobertoldo/freedomhood">
    <img
      alt="Build Status"
      src="https://travis-ci.com/matteobertoldo/freedomhood.svg?branch=master"
    />
  </a>
  <a href="https://david-dm.org/matteobertoldo/freedomhood?type=dev">
    <img
      alt="devDependencies"
      src="https://img.shields.io/david/dev/matteobertoldo/freedomhood"
    />
  </a>
  <a href="https://david-dm.org/matteobertoldo/freedomhood">
    <img
      alt="dependencies"
      src="https://img.shields.io/david/matteobertoldo/freedomhood"
    />
  </a>
  <a href="https://matteobertoldo.github.io/freedomhood/">
    <img
      alt="Website Status"
      src="https://img.shields.io/website?url=https%3A%2F%2Fmatteobertoldo.github.io%2Ffreedomhood%2F"
    />
  </a>
</p>

<p align="center">
  Source code of Freedomhood website build with <a href="https://gohugo.io">Hugo</a>, <a href="https://webpack.js.org">Webpack</a> & <a href="https://threejs.org">Three.js</a>.
</p>

---

## Initial Setup

Before cloning the repository make sure you have installed [Node.js](https://nodejs.org) on your OS. <br/>
The **recommended version** for installing dependencies is defined on the [`.nvmrc`](https://github.com/matteobertoldo/freedomhood/blob/develop/.nvmrc) file.

If the downloaded version of Node.js, or the version already installed on your OS coincides with the version indicated by the `.nvmrc` file, you can override the following steps. Otherwise it is recommended to run the following commands:

```sh
$ brew install nvm
$ brew nvm info #follow the instructions on how to properly install nvm
```

The above steps have been tested with [`Homebrew`](https://brew.sh) (package manager for macOS or Linux), if you are using a different OS please consider the alternatives for installing `nvm` like [`Chocolately`](https://chocolatey.org).

## Dependency Installation

```sh
$ git checkout https://github.com/matteobertoldo/freedomhood.git
$ cd freedomhood
$ nvm use
$ npm i
```

After all dependencies have been installed, you need to install [`Hugo`](https://gohugo.io/getting-started/installing/#quick-install) in order to use the next command. <br/>
Once installed run:

-   `$ npm run serve`

All assets and the entire site will be built, which will be available at `http://localhost:1313` with a live reload already included.

## Architecture

The following indexes describe the front-end architecture for each file and assets to be compiled. All patterns are present in the `src` directory. <br/>
Each architecture follows a _standard_ pattern for each type of asset. The tools used for the front end architecture is inspired by the following [Basic SPA Bolierplate](https://boilerplates.js.org/docs/#basic-spa---boilerplate-features).

### SASS

All `sass` files are hosted in a pattern of folders specified in this guide: ("[`7-1-pattern`](https://sass-guidelin.es/#the-7-1-pattern)").

```py
scss/
├── abstract/
├── base/
├── components/
├── layouts/
├── pages/
├── themes/
└── vendors/
```

For each new file to be added, please respect the correct pattern indicated by the guide.

### SVG

In order to manipulate all the icons present in the entire site, the possibility of using a single spritemap was chosen for [various advantages](https://css-tricks.com/icon-fonts-vs-svg/). Each file in the `svg` directory represents the `id`: (`#`) of the icon to be used, always prefixed by `icon-`. So each icon can be used in HTML with the following structure (ex. with `logo.svg` file).

```html
<svg>
    <use xlink:href="/path/to/spritemap.svg#icon-logo"></use>
</svg>
```

### Templates

All `templates` files are hosted in a pattern of folders specified in this guide: [Hugo Directory Structure](https://gohugo.io/getting-started/directory-structure/#new-site-scaffolding).

```py
templates/
├── archetypes/
├── content/
├── data/
├── layouts/
├── static/
└── themes/
```

For each new file to be added, please respect the correct pattern indicated by the guide.

## Browers Support

To be able to check the support list for the various browsers just run the command:

-   `$ npm run browserlist`

## License

Freedomhood is licensed under the MIT License - see the [LICENSE.md](https://github.com/matteobertoldo/freedomhood/blob/master/LICENSE) file for details.

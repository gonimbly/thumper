# thumper

> A customized version of bootstrap with customized for use with Go Nimbly projects and extended with new custom component styles.

### Features

✓ Subjectively better looking than bootstrap!  
✓ Scoped version for inclusion in environments that already have css we don't want to override.  
✓ Webpackable js or css  
✓ Sourcemaps  
✓ Only one file to include  
✓ Font Awesome optional  

### Install

```bash
yarn add @gonimbly/thumper
```

### Usage

At the beginning of your project's main `styles.css` add:

```css
@import '~@gonimbly/thumper/dist/thumper.css';
```

and in your app's entry point (e.g. `index.js`) add:

```javascript
import './styles.css';
```

If you would like to use [Font Awesome](http://fontawesome.io/) icons in your project then add the latest [cdn link](https://www.bootstrapcdn.com/fontawesome/) or install via npm.

### Directory Layout

```
.
├── /bin/                       # Build scripts
├── /node_modules/              # 3rd-party libraries and utilities _generated_
├── /components/                # Documentation components
├── /deploy/                    # Deployment folder, _generated_
├── /dist/                      # Production build folder _generated_
├── /pages/                     # React.js-based Documentation pages/styles
│   ├── /examples/              # Documentation examples, can be mixed and matched into pages
│      ├── /img/                # Documentation example images
├── /public/                    # Development build folder _generated_
├── /src/                       # Thumper src files
├── /views/                     # Server-side views
│── app.js                      # The main Documentation JavaScript file (entry point)
│── server.js                   # Server configuration / settings
│── package.json                # Dev dependencies and NPM scripts
```

### Getting Started with development

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone git@bitbucket.org:gonimbly/thumper.git
$ npm install
$ npm start
```

App will open [http://localhost:3000/](http://localhost:3000/) in your browser.

### How to Test

There are no tests, we should add some

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to https://nimbly-thumper.herokuapp.com/
```

### Publishing a new version on NPM

```
npm version <major|minor|patch>
npm publish
```

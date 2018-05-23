# Front-end

The front-end of this project has been setup using the MMT Digital Yeoman generator. This scaffolds out a base structure for a project. Beyond that the front-end can grow with the project into its own thing. If the project incurs any major changes to the front-end structure/tooling/philosophy, please document that here.

Related: [MMT Yeoman Generator Docs](https://mmtdigital.atlassian.net/wiki/spaces/DEV/pages/312606739/MMT+Digital+Webpack+Boilerplate+Generator+Using+Yeoman)

## Quick Start

```bash
  cd path-to-repo/Project.Kentico.Mvc/app
  npm i
```


### Run dev build, watch for changes:
```bash
  npm start
```

### Run production build
```bash
  npm run build:prod
```

### Run tests
```bash
  npm test
```

### Run tests, watch for changes
```bash
  npm run test:watch
```

## Webpack

The front-end uses Webpack to build its assets. You can find the full configuration for Webpack in the `app/config/webpack` directory. There are multiple configurations within that folder that make up just two tasks: _dev_ and _prod_. Anything in the `base` folder is shared between the two. To learn more about Webpack, check out [the Webpack wiki article](https://mmtdigital.atlassian.net/wiki/spaces/DEV/pages/44630330/Webpack).

The main entry point for Webpack is `app/src/index.js`. Anything that is imported here will be processed by Webpack. For more information on "_how to x_" check out the front-end FAQ section below.

## Structure

### Components

The structure we prefer is a "component-style architecture". This plays really nicely with React apps, but equally works for non-React apps too. So, if you needed to build a menu system, you might store these files in: `app/src/components/Menu`. Inside that directory, there could be: `Menu.js`, `Menu.test.js` and `index.js`. If you're really feeling React-y, you could add your styling in here too: `Menu.scss`. This way — we're really thinking in terms of components. Questions like _I need to tweak the menu, hmmm, where to look?_ become easy when you see:

```
components
    - Menu
        - Menu.js
        - Menu.test.js
        - Menu.scss
        - index.js
```

Note that it's generally standard procedure to name your **components in `PascalCase`**. Other **JavaScript files should be `camelCase`** and **styles should be `train-case`**. These variations can be confusing, but they're industry standard.

### Global styles

There are obviously some occasions when you need to write more global styles. these should go in `app/src/styles`. 

## Testing

Jest is our chosen test runner. We use the `describe`, `test`, `expect` structure. An example would be:

```js
describe('The function in question', () => {
  test('can return its input', () => {
    expect(theFunction(2)).toBe(2)
  })
})
```

If the filename has `.test.js` in it, it will be picked up by the test runner. Try to keep tests located next to their functions/components.

### More advanced DOM testing

If you're using React — you can use Enzyme to mount DOM elements. You can configure this in the `app/config/jest.setup.js` file. If you're not using React, you can use Bore instead. Again, configure in the same place.

## Prepush

Ah! The controversial prepush. When you do a `git push` (either in a command prompt/terminal or in a Git client like Sourcetree), a prepush task will run the linter. If it fails, your push will fail. This can be frustrating — but it keeps a strict set of guidelines around code quality and style.

### If your push fails...

```bash
  npm run prepush
```

This will tell you exactly what has caused the failure and how to fix it. If it's your code, fix it, commit the fix and try to push again.

If it's not your code, you have two options:

1) Fix it, then post a nice message in your Slack group telling your team that you had to fix it. Hopefully in the future people will then fix their own stuff.
2) Immediately inform the team via Slack that there is an error. Make sure the developer in question acknowledges that they need to fix it, then run `git push --no-verify`.

## FAQs

**_How do I mount a React component within my "normal" JavaScript?_**
[Follow this guide](https://mmtdigital.atlassian.net/wiki/spaces/DEV/pages/318898193/React+Inside+Kentico)

**_How do I make Webpack pick up a .png / .jpg / .svg / .json / .webm / any other file?_**
It must be imported into a JavaScript file for Webpack to process it. For "assets", there should be an `assetManifest.js` file where you can import your desired asset.

**_How do I use web fonts?_**
We don't recommend using them anymore and therefore do not support them. Try to use SVGs for icons — they're more accessible, scalable, CSS-able and more fit-for-purpose.

**_I disagree with the linting rules / build setup, who can I talk to?_**
No worries — first, raise it with the team on Slack and discuss the issue. If you still feel strongly about it and want to make a more global change to how MMT approach something — raise it on the [front-end change request spreadsheet](https://docs.google.com/spreadsheets/d/1na_atqQzJGrtpGLPGmD6__EmmKFri8FZOhKso9bp7gI)


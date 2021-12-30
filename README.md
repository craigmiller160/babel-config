# jest-config

A standard Babel configuration for JavaScript projects.

## How to Use

First, install this library with `yarn install --dev @craigmiller160/babel-config`. If you need to merge this with other configs, also install the `config-mege` library with `yarn install --dev @craigmiller160/config-merge`.

Then, create a `babel.config.js` file in the root of your project.

If only using this config, use it with:

```javascript
module.exports = require('@craigmiller160/babel-config');
```

If combining it with other configs, whether from libraries or locally, use it with:

```javascript
const babelConfig= require('@craigmiller160/babel-config');
const configMerge = require('@craigmiller160/config-merge');

module.exports = configMerge(babelConfig, moreConfig1, moreConfig2);
```

const createPresetEnv = require('./utils/createPresetEnv');
const transformImports = require('./utils/transformImports');
const languageExtensions = require('./utils/languageExtensions');

module.exports = {
    ignore: [
        /core-js/,
        /@babel\/runtime/
    ],
    plugins: [
        ...languageExtensions,
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ],
        [
            'babel-plugin-transform-imports',
            transformImports
        ]
    ],
    env: {
        development: {
            presets: [
                createPresetEnv(false)
            ]
        },
        production: {
            presets: [
                createPresetEnv(false)
            ]
        },
        test: {
            presets: [
                createPresetEnv('commonjs')
            ]
        }
    }
};

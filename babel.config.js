const createPresetEnv = require('./utils/createPresetEnv');
const transformImports = require('./utils/transformImports');

module.exports = {
    ignore: [
        /core-js/,
        /@babel\/runtime/
    ],
    plugins: [
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

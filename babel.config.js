const createPresetEnv = require('./utils/createPresetEnv');
const transformImports = require('./utils/transformImports');

module.exports = {
    plugins: [
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

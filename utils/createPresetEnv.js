const createPresetEnv = (modules) => ([
    '@babel/preset-env',
    {
        modules,
        useBuiltIns: 'entry',
        corejs: 3
    }
]);

module.exports = createPresetEnv;

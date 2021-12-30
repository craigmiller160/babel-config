const createPresetEnv = (modules) => ([
    '@babel/preset-env',
    {
        modules,
        targets: {
            node: 'current' // TODO concerned this may cause problems
        },
        useBuiltIns: 'entry',
        corejs: 3
    }
]);

module.exports = createPresetEnv;

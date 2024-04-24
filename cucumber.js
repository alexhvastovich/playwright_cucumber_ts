module.exports = {
    default: {
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: [
            'src/features/**/*.feature'
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            'src/step-definitions/**/*.ts',
            'src/setup/hooks.ts',
            'src/setup/world.ts',
            'src/index.ts'

        ],
        requireModule: [
            'ts-node/register'
        ],
        format: [
            'progress-bar',
            'html:cucumber-report.html'
        ]
    }
};

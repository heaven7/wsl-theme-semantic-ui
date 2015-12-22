Package.describe({
  name: 'heaven7:wsl-theme-semantic-ui',
  version: '0.0.3',
  summary: 'Theme semantic ui package',
  git: 'https://github.com/heaven7/wsl-theme-semantic-ui.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
    'heaven7:wsl-core@0.0.3',
    'heaven7:wsl-i18n@0.0.3',
    'aldeed:template-extension@4.0.0',
    'semantic:ui-css@2.1.2',
    'semantic:ui@2.1.6',
    'semantic:ui-data@2.1.6',
    'fabienb4:autoform-semantic-ui@0.8.0',
    'flemay:less-autoprefixer@1.2.0',
    'jquery'
];

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use(packages, both);
    api.imply(packages);

    api.addAssets([
        'lib/client/layouts/main.less',
        'lib/client/semantic-ui/custom.semantic.json'
    ], 'client');

    api.addFiles([
        'lib/client/startup.js',
        'lib/client/layouts/main.html',
        'lib/client/layouts/main.js',

        // ui components
        'lib/client/accordion/templates.html',
        'lib/client/accordion/templates.js',
        'lib/client/buttons/templates.html',
        'lib/client/buttons/templates.js',
        'lib/client/cards/templates.html',
        'lib/client/cards/templates.js',
        'lib/client/divider/templates.html',
        'lib/client/dropdown/templates.html',
        'lib/client/dropdown/templates.js',
        'lib/client/forms/search.html',
        'lib/client/forms/search.js',
        'lib/client/forms/actions.html',
        'lib/client/forms/actions.js',
        'lib/client/icons/templates.html',
        'lib/client/images/templates.html',
        'lib/client/modal/templates.html',
        'lib/client/modal/templates.js',
        'lib/client/popup/templates.js',
        'lib/client/text/templates.html'
    ], 'client');

    api.addFiles([
        'lib/both/ui.js'
    ], both);
});

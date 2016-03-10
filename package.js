Package.describe({
  name: 'heaven7:wsl-theme-semantic-ui',
  version: '0.0.4_1',
  summary: 'Theme semantic ui package',
  git: 'https://github.com/heaven7/wsl-theme-semantic-ui.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
    'semantic:ui-css@2.1.2',
    'semantic:ui@2.1.8',
    'semantic:ui-data@2.1.8',
    'aldeed:autoform@5.8.0',
    'fabienb4:autoform-semantic-ui@0.9.3',
    'flemay:less-autoprefixer@1.2.0',
    'raix:handlebar-helpers@0.2.5',
    'underscore',
    'jquery',
    'blaze-html-templates',
    'ecmascript',
    'es5-shim',
    'reactive-var'
];

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use(packages, both);
    api.imply(packages);

    api.addAssets([
        'lib/client/semantic-ui/custom.semantic.json'
    ], 'client');

    api.addFiles([
        'lib/client/startup.js',

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
        'lib/client/forms/form.html',
        'lib/client/forms/form.js',
        'lib/client/forms/search.html',
        'lib/client/forms/search.js',
        'lib/client/forms/actions.html',
        'lib/client/forms/actions.js',
        'lib/client/headings/templates.html',
        'lib/client/icons/templates.html',
        'lib/client/images/templates.html',
        'lib/client/menu/templates.html',
        'lib/client/menu/templates.js',
        'lib/client/modal/templates.html',
        'lib/client/modal/templates.js',
        'lib/client/progressBar/templates.html',
        'lib/client/progressBar/templates.js',
        'lib/client/segment/templates.html',
        'lib/client/segment/templates.js',
        'lib/client/sidebar/templates.html',
        'lib/client/sidebar/templates.js',
        'lib/client/user/templates.html',
        'lib/client/user/templates.js'
    ], ['client']);

});

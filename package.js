Package.describe({
  name: 'heaven7:wsl-theme-semantic-ui',
  version: '0.0.1',
  summary: 'Theme semantic ui package',
  git: 'https://github.com/heaven7/wsl-theme-semantic-ui.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    var packages = [
        'heaven7:wsl-core@0.0.2',
        'heaven7:wsl-i18n@0.0.2',
        'aldeed:template-extension@4.0.0',
        'semantic:ui-css@2.1.2',
        'semantic:ui@2.1.6',
        'semantic:ui-data',
        'fabienb4:autoform-semantic-ui@0.8.0',
        'flemay:less-autoprefixer@1.2.0',
        'jquery'
    ];

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
        'lib/client/forms/search.html',
        'lib/client/forms/search.js',
        'lib/client/forms/actions.html',
        'lib/client/forms/actions.js',
        'lib/client/icons/templates.html',
        'lib/client/images/templates.html',
        'lib/client/modal/templates.html',
        'lib/client/modal/templates.js',
        'lib/client/popup/templates.js',
        'lib/client/text/templates.html',

        // package components
        'lib/client/wsl-projects/projects/templates.html',
        'lib/client/wsl-projects/projects/templates.js',
        'lib/client/wsl-projects/settings/templates.html',
        'lib/client/wsl-projects/settings/templates.js',
        'lib/client/wsl-projects/members/templates.html',
        'lib/client/wsl-projects/members/templates.js',
        'lib/client/wsl-tasks/tasks/templates.html',
        'lib/client/wsl-tasks/tasks/templates.js',
        'lib/client/wsl-tasks/taskCategories/templates.html',
        'lib/client/wsl-tasks/taskCategories/templates.js',
        'lib/client/wsl-memberships/templates.html',
        'lib/client/wsl-memberships/templates.js',
        'lib/client/wsl-memberships/hooks.js'
    ], 'client');

    api.addFiles([
        'lib/both/ui.js'
    ], both);
});

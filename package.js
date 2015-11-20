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
        'semantic:ui-css@1.9.3',
        'semantic:ui@1.12.1_1',
        'semantic:ui-data@1.12.1_1',
        'semantic:ui-icon@1.9.3',
        'semantic:ui-item@1.9.2',
        'semantic:ui-container@2.1.5',
        'semantic:ui-loader@1.9.3',
        'semantic:ui-button@1.9.3',
        'semantic:ui-form@1.9.2',
        'semantic:ui-menu@1.9.3',
        'semantic:ui-segment@1.9.3',
        'semantic:ui-dropdown@1.9.3',
        'semantic:ui-modal@1.9.3',
        'semantic:ui-transition@1.9.2',
        'semantic:ui-popup@1.9.3',
        'semantic:ui-sidebar@1.9.2',
        'semantic:ui-grid@1.9.3',
        'semantic:ui-divider@1.9.3',
        'semantic:ui-card@1.9.3',
        'semantic:ui-label@1.9.3',
        'semantic:ui-dimmer@1.9.3',
        'semantic:ui-checkbox@1.9.3',
        'semantic:ui-image@1.9.3',
        'semantic:ui-header@1.9.2',
        'semantic:ui-accordion@2.1.5',
        'semantic:ui-list@1.9.3',
        'semantic:ui-reset@1.9.0',
        'semantic:ui-rating@1.9.3',
        'semantic:ui-input@1.9.3',
        'semantic:ui-site@1.9.3',
        'semantic:ui-message@1.9.3',
        'semantic:ui-reveal@1.9.3',
        'semantic:ui-search@1.9.3',
        'semantic:ui-feed@1.9.3',
        'semantic:ui-progress@1.9.3',
        'semantic:ui-table@1.9.3',
        'semantic:ui-tab@1.9.2',
        'semantic:ui-step@1.9.3',
        'semantic:ui-sticky@1.9.2',
        'semantic:ui-statistic@1.9.2',
        'semantic:ui-rail@1.9.2',
        'semantic:ui-comment@1.9.3',
        'semantic:ui-visibility@2.1.6',
        'semantic:ui-nag@1.9.3',
        'semantic:ui-api@1.9.3',
        'semantic:ui-embed@2.1.6',
        'semantic:ui-breadcrumb@1.9.3',
        'semantic:ui-shape@1.9.2',
        'semantic:ui-flag@1.9.3',
        'semantic:ui-video@1.9.3',
        'semantic:ui-ad@2.1.5',
        'fabienb4:autoform-semantic-ui@0.1.3',
        'flemay:less-autoprefixer@1.0.2',
        'jquery'
    ];

    api.use(packages, both);

    api.imply(packages);

    api.addFiles([
        'lib/client/startup.js',
        'lib/client/layouts/main.html',
        'lib/client/layouts/main.js',
        'lib/client/semantic-ui/custom.semantic.json',
        'lib/client/wsl-projects/templates.html',
        'lib/client/wsl-projects/templates.js',
        'lib/client/wsl-tasks/tasks/templates.html',
        'lib/client/wsl-tasks/tasks/templates.js',
        'lib/client/wsl-tasks/taskCategories/templates.html',
        'lib/client/wsl-tasks/taskCategories/templates.js',
        'lib/client/wsl-memberships/templates.html',
        'lib/client/wsl-memberships/templates.js'
    ], 'client');

    api.addFiles([
    ], both);
});

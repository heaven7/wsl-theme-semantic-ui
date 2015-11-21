Template.layoutMain.onRendered(function () {
    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});

/**
 * Replaces
 */

Template.ui_layoutMain.replaces("layoutMain");
Template.ui_nav.replaces("nav");
Template.ui_logo.replaces("logo");
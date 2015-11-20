Template.layoutMain.onRendered(function () {
    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});

/**
 * Replaces
 */

Template.sui_layoutMain.replaces("layoutMain");
Template.sui_nav.replaces("nav");
Template.sui_logo.replaces("logo");
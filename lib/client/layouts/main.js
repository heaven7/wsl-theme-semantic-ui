Template.layoutMain.onRendered(function () {
    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});
Template.dropdownMenuWithRoles.onCreated(function () {
    this.group = new ReactiveVar();
});

Template.dropdownMenuWithRoles.onRendered(function () {
    this.group.set(this.data.group);

    // activate semantic ui dropdown
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});

Template.dropdownMenuWithRoles.helpers({
    group: function () {
        return Template.instance().group.get();
    }
});
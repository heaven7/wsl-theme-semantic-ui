Template.dropdownMenuWithRoles.onRendered(() => {

    // activate semantic ui dropdown
    $(document).ready(function() {
        $('.ui.dropdown').dropdown()
    })
})

Template.dropdownMenuWithRoles.helpers({
    group: () => Template.instance().data.group
})

Template.selectDropdown.helpers({
    required: () => this.required ? "required" : "",
    placeholder: () => this.placeholder || "Select"
})

Template.selectDropdown.onRendered(() => {
    $(document).ready(function() {
        $('.ui.dropdown').dropdown()
    })
})
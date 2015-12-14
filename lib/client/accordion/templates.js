Template.accordion.onCreated(function () {
    this.templateName = new ReactiveVar();
});

Template.accordion.onRendered(function() {
    // set template var
    this.templateName.set(this.data.template);

    // activate accordion
    $('.ui.accordion').accordion();
});

Template.accordion.helpers({
    template: function () {
        return Template.instance().templateName.get();
    }
});

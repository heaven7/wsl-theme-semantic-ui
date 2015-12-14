Template.accordion.onRendered(function() {
    // set template var into session
    Session.set('template', this.data.template);

    // activate accordion
    $('.ui.accordion').accordion();
});

Template.accordion.helpers({
    template: function () {
        return Session.get('template');
    }
});

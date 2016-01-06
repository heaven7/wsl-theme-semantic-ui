Template.accordion.onCreated(function () {
    this.templateName = new ReactiveVar();
});

Template.accordion.onRendered(function() {
    this.templateName.set(this.data.template);

    // activate accordion
    $('.ui.accordion').accordion({
        exclusive: false
    });
});

Template.accordion.helpers({
    template: function () {
        return Template.instance().templateName.get();
    }
});

Template.accordion.events({
    'click .toggleAll': function(e) {
        var titles = $(e.currentTarget).parents('.ui').siblings('.accordion').children('.title');
        var contents = $(e.currentTarget).parents('.ui').siblings('.accordion').children('.content');
        titles.toggleClass('active');
        contents.toggleClass('active').children().toggleClass('visible hidden');
    }
});

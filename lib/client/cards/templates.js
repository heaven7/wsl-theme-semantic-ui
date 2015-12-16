Template.cards.onCreated(function () {
    this.templateName = new ReactiveVar();
});

Template.cards.onRendered(function() {
    // set template var
    this.templateName.set(this.data.template);

});

Template.cards.helpers({
    template: function () {

        return Template.instance().templateName.get();
    }
});

Template.card.onRendered(function (){
    console.log(this);
})
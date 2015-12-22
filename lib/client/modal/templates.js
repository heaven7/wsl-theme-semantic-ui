Template.showModal.onCreated(function () {
    this.templateName = new ReactiveVar();
});

Template.showModal.onRendered(function() {
    // set template var
    this.templateName.set(this.data.template);

    var id = '#' + this.data.id;
    this.autorun(_.bind(function(){
        Tracker.afterFlush(_.bind(function(){
            // after the modal window is added to dom
            // setup semantic ui specific callbacks
            // http://semantic-ui.com/modules/modal.html#/settings
            $('.ui.modal').modal({
                onShow: function(){
                    $(id + ' .field').removeClass("error");
                    $(id).removeClass('loading');
                },
                onApprove: function () {
                    $(id).addClass('loading');
                    return false;
                },
                onDeny: function() {
                    console.log('denied: ', id);
                    $(id).removeClass('loading');
                    $(id + ' .pointing.red').remove();
                    closeModal('.ui.modal');
                    return false;
                }
            });
        },this));
    }));
});

Template.showModal.helpers({
    template: function () {
        return Template.instance().templateName.get();
    }
});

this.closeModal = function(id) {
    $(id).modal('hide');
};

this.openModal = function (id) {
    $(id).modal('show');
};
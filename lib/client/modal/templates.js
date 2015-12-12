Template.showModal.onRendered(function () {
    var id = '#' + this.data.id();

    this.autorun(_.bind(function(){
        Tracker.afterFlush(_.bind(function(){
            // after the modal window is added to dom
            // setup semantic ui specific callbacks
            // http://semantic-ui.com/modules/modal.html#/settings
            $(id).modal({
                onShow: function(){
                    $(id + ' .field').removeClass("error");
                },
                onApprove: function () {
                    $(id).addClass('loading');
                    return false;
                },
                onDeny: function() {
                    $(id).removeClass('loading');
                    $(id + ' .pointing.red').remove();
                    closeModal(id);
                    return false;
                }
            });
        },this));
    }));
});

this.closeModal = function(id) {
    $(id).modal('hide');
};

this.openModal = function (id) {
    $(id).modal('show');
};
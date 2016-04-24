Template.showModal.onCreated(function () {
    this.templateName = new ReactiveVar()
});

Template.showModal.onRendered(function() {
    // set template var
    this.templateName.set(this.data.template)

    var id = '#' + this.data.id
    this.autorun(_.bind(() => {
        Tracker.afterFlush(_.bind(() => {
            // after the modal window is added to dom
            // setup semantic ui specific callbacks
            // http://semantic-ui.com/modules/modal.html#/settings
            $('.ui.modal').modal({
                onShow: function() {
                    $(id + ' .field').removeClass("error")
                    $(id).removeClass('loading')
                    return WSL.ui.modal.onShow()
                },
                onVisible: function() {
                    return WSL.ui.modal.onVisible()
                },
                onHide: function() {
                    return WSL.ui.modal.onHide()
                },
                onHidden: function() {
                    return WSL.ui.modal.onHidden()
                },
                onApprove: function (el) {
                    $(id).addClass('loading')
                    WSL.ui.modal.onApprove(el)
                    return false
                },
                onDeny: function(el) {
                    $(id).removeClass('loading')
                    $(id + ' .pointing.red').remove()
                    closeModal('.ui.modal')
                    WSL.ui.modal.onDeny(el)
                    return false
                }
            })
        },this))
    }))
})

Template.showModal.helpers({
    template: function () {
        return Template.instance().templateName.get()
    }
})

this.closeModal = function(id) {
    $(id).modal('hide')
}

this.openModal = function (id) {
    $(id).modal('show')
}
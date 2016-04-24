Meteor.startup(() => {
    WSL.ui.modal = {}

    // override functions
    WSL.ui.modal.onShow = () => {}
    WSL.ui.modal.onVisible = () => {}
    WSL.ui.modal.onHide = () => {}
    WSL.ui.modal.onHidden = () => {}
    WSL.ui.modal.onApprove = () => {}
    WSL.ui.modal.onDeny = () => {}
})
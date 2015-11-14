Template.projectPage.events({
    'click .editProject': function(e, t) {
        return Session.set('selectedProject', this._id);
    },
    'click .deleteProject': function(e, t) {
        return Meteor.call('deleteProject', this, function(error, result) {
            if (error) {
                console.log('Error: ' + error);
            }
            return true;
        });
    },
    'click .addCategory': function() {
        $('#insertTaskCategoryModal')
            .modal({
                onApprove: function () {
                    // if there is an error
                    //return false;
                }
            })
            .modal('show');
    },
    'click .inviteMembers': function() {
        $('#inviteMembersModal')
            .modal('show');
    }
});
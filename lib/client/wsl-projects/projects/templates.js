Template.projectPage.events({
    'click .showSettings': function(e, t) {
        $('#showSettingsModal')
            .modal('show');
    },
    'click .editProject': function(e, t) {
        $('#editProjectModal')
            .modal('show');
    },
    'click .deleteProject': function(e, t) {
        return Meteor.call('deleteProject', this, function(error, result) {
            if (error) {
                if(error.message === '[not_allowed]')
                    wAlert.error(i18n.t("not_allowed"));
            }
            return true;
        });
    },
    'click .addTaskCategory': function() {
        $('#insertTaskCategoryModal')
            .modal('show');
    },
    'click .inviteMembers': function() {
        $('#inviteMembersModal')
            .modal({
                onApprove: function () {
                    $('#submitMembersForm').addClass('loading');
                    return false;
                }
            })
            .modal('show');
    }
});

Template.projectPage.onRendered(function () {
    // manually activate semantic ui dropdowns
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});


/**
 * Replaces
 */

Template.ui_projectPage.replaces("projectPage");

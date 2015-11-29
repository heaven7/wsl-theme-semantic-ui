AutoForm.hooks({
    inviteMembersForm: {
        onSubmit: function(insert, doc) {
            //return false;
        },
        onError: function(insert, error, template) {
            $('#submitMembersForm').removeClass('loading');
        },
        onSuccess: function(insert, doc) {
            console.log(doc);
            wAlert.success(i18n.t('invitation_send_successfully'));
            $('#inviteMembersModal').modal('hide');
        }
    }
});
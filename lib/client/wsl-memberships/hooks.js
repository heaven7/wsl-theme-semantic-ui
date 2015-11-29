AutoForm.hooks({
    inviteMembersForm: {
        onSubmit: function(insert, doc) {
            //return false;
        },
        onError: function(insert, error, template) {
            return console.log(error);
        },
        onSuccess: function(insert, doc) {
            console.log(doc);
            wAlert.success('Invitaion send successfully');
            $('#inviteMembersModal').modal('hide');
        }
    }
});
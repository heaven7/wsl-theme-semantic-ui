Template.ui_projectSettingsForm.helpers({
    settings: function() {
        var setting = Settings.findOne({doc: this.doc, docType: this.docType});
        return setting;
    }
});
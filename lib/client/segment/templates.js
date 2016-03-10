Template.segment.onCreated(function () {
    this.templateName = new ReactiveVar()
})

Template.segment.onRendered(function() {
    let data = Template.currentData()
    this.templateName.set(data.template)
})

Template.segment.helpers({
    template: () => Template.instance().templateName.get()
})


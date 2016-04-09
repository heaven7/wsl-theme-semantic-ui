Template.segments.onCreated(function () {
    this.segments = new ReactiveVar()
})

Template.segments.onRendered(function() {
    this.autorun(() => {
        let data = Template.currentData()
        this.segments.set(data.segments)
    })
})

Template.segments.helpers({
    segments: () => Template.instance().segments.get(),
    isArray(value) {
        return _.isArray(value)
    }
})

Template.segment.onCreated(function () {
    this.templateName = new ReactiveVar()
    this.segments = new ReactiveVar()
})

Template.segment.onRendered(function() {
    this.autorun(() => {
        let data = Template.currentData()
        this.templateName.set(data.template)
        this.segments.set(data.segments)
    })
})

Template.segment.helpers({
    template: () => Template.instance().templateName.get(),
    segments: () => Template.instance().segments.get()
})


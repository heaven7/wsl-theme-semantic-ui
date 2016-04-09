Template.comments.onCreated(function () {
    this.commentItems = new ReactiveVar()
})

Template.comments.onRendered(function() {
    this.autorun(() => {
        let data = Template.currentData()
        this.commentItems.set(data.commentItems)
    })
})

Template.comments.helpers({
    commentItems: () => Template.instance().commentItems.get()
})
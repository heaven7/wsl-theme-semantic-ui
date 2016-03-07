Template.accordion.onCreated(function () {
    this.templateName = new ReactiveVar()
})

Template.accordion.onRendered(function() {
    let data = Template.currentData()
    this.templateName.set(data.template)
    let notExclusive = data.notExclusive ? false : true 
    $('.ui.accordion').accordion({
        exclusive: notExclusive
    })
})

Template.accordion.helpers({
    template: () => Template.instance().templateName.get()
})

Template.accordion.events({
    'click .toggleAll': (e) => {
        var titles = $(e.currentTarget).parents('.ui').siblings('.accordion').children('.title')
        var contents = $(e.currentTarget).parents('.ui').siblings('.accordion').children('.content')
        titles.toggleClass('active')
        contents.toggleClass('active').children().toggleClass('visible hidden')
    }
})

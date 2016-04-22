Template.menu.onRendered(function() {
  this.$(".ui.dropdown").dropdown()
});

Template.menu.helpers({
    isArray(value) {
        return _.isArray(value)
    }
})

Template.menuLink.onRendered(function() {
    let attrs = []
    const data = Template.currentData()
    for(let d in data) {
        if(d != 'value' && d != 'class')
            attrs[d] = data[d]
    }
    let el = this.find('a')

    setAttributes(el, attrs)
})

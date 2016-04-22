Template.button.onRendered(function () {
    let attrs = []
    const data = Template.currentData()
    for(let d in data) {
        if(d != 'value' && d != 'class' && d != 'text')
            attrs[d] = data[d]
    }
    let el = this.find('button') || Template.instance().firstNode
    if(el)
        setAttributes(el, attrs)
})

Template.button_icon_only.onRendered(function () {
   if(this.data.content)
       $('.button').popup()
})
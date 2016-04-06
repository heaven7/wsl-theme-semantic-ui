Meteor.startup(() => {
    if(!Package['heaven7:wsl-core']) WSL = window && window['WSL'] ? window['WSL'] : {}
    else WSL = window['WSL']

    WSL.search.result = {}

    WSL.search.onSelect = (() => {})()
})

Template.search.onCreated(function() {
    this.search = new ReactiveDict()
})

Template.search.onRendered(function() {
    const cssClass = Template.currentData().class ? '.' + Template.currentData().class : ''
    const cssId = Template.currentData().id ? '#' + Template.currentData().id : ''
    const search = Template.instance().search
    search.set('icon', Template.currentData().icon)
    const selector = `.ui.search${cssClass}${cssId}`
    this.autorun(() => {
        const value = Template.currentData().value
        search.set('url', Template.currentData().url)
        $(selector)
            .search({
                apiSettings: {
                    cache: false,
                    onResponse: function(searchResponse) {
                        return WSL.search.searchResponse(searchResponse)
                    },
                    url: search.get('url')
                },
                onSelect: function (result) {
                    return WSL.search.onSelect(result)
                },
                minCharacters : 3
            })
        if(value)
            $(selector).search('set value', value)
    })
})

Template.search.helpers({
    icon: () => {
        const search = Template.instance().search
        return search.get('icon') ? search.get('icon') : "search"
    }
})
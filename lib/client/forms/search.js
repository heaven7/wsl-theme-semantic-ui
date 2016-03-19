Meteor.startup(() => {
    if(!Package['heaven7:wsl-core']) WSL = window && window['WSL'] ? window['WSL'] : {}
    else WSL = window['WSL']

    WSL.search.result = {}
})
Template.search.onCreated(function() {
    this.search = new ReactiveDict()
    this.result = new ReactiveVar()
})
Template.search.onRendered(function() {
    const search = Template.instance().search
    search.set('icon', Template.currentData().icon)
    this.autorun(() => {
        search.set('url', Template.currentData().url)
        $('.ui.search')
            .search({
                apiSettings: {
                    cache: false,
                    onResponse: function(searchResponse) {
                        return WSL.search.searchResponse(searchResponse)
                    },
                    url: search.get('url')
                },
                minCharacters : 3
            })
    })
})

Template.search.helpers({
    icon: () => {
        const search = Template.instance().search
        return search.get('icon') ? search.get('icon'): "search"
    }
})

Template.search.events({
    'click .result': (e,t) => {
        let val = $(e.currentTarget).find('.title').text()
        WSL.search.result = val
        Template.instance().result.set(val)
    }
})
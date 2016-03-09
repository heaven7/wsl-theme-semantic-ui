Template.search.onCreated(function() {
    this.search = new ReactiveDict()
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
Template.search.onCreated(function() {
    this.search = new ReactiveDict()
})

Template.search.onRendered(function() {
    const search = Template.instance().search
    search.set('url', this.data.url)
    Tracker.autorun(() => {
        $('.ui.search')
            .search({
                apiSettings: {
                    cache: false,
                    onResponse: function(searchResponse) {
                        return WSL.ui.searchResponse(searchResponse)
                    },
                    url: search.get('url')
                },
                minCharacters : 3
            })
    })
})
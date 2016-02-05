Template.progressBar.onRendered(() => {
    $('.ui.progress ').progress()
})

Template.progressBar.helpers({
    percent: () => this.percent ? this.percent : 0
})
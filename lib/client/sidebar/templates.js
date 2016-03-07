Template.sidebar.onRendered(() => {
	let data = Template.currentData()
	console.log(data.toggle)
	$('.ui.sidebar').sidebar('attach events', data.toggle, 'toggle')
})

Template.sidebar.events({
	'click .sidebar a': () => $('.ui.sidebar').sidebar('hide')
})
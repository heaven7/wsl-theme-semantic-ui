Meteor.startup(() => {
    if(!Package['heaven7:wsl-core']) WSL = window && window['WSL'] ? window['WSL'] : {}
    else WSL = window['WSL']

    WSL.ui = {}
})
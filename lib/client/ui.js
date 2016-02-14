WSL = window['WSL'] ? window['WSL'] : {}

/**
 * WSL ui settings and methods.
 * @namespace WSL.ui
 * @type {Object}
 */

WSL.ui = {};


/**
 * Override response function to alter data retrieved from an API
 * see: http://semantic-ui.com/modules/search.html#server-responses
 * @param searchResponse json object
 */
WSL.ui.searchResponse = (searchResponse) => {}

window['WSL'] = WSL
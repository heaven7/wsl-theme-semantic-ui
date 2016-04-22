setAttributes = (element, attributes) => {
    var keys = Object.keys(attributes);
    for(var i = 0; i < keys.length; ++i) {
        element.setAttribute(keys[i], attributes[keys[i]]);
    }
}
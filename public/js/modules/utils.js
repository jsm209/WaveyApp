
// Will get variables in URL
// They can be accessed with getUrlVars()["name of variable"]
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Given an object with properties or a dictionary
// will sort by their values and return the top x results
// and return the resulting array.
function sortTopOccurences(dict, x) {
    // Create items array
    var items = Object.keys(dict).map(function (key) {
        return [key, dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
        return second[1] - first[1];
    });

    // Returns a new array with only the first x items
    return items.slice(0, x);
}

// Given a string with escpaed characters "<", ">", or "&"
// Will replace them with their actual character.
function unEntity(str) {
    return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

// Given the id of a DOM element
// Will return that object.
function $(id) {
    return document.getElementById(id);
}

export {getUrlVars, sortTopOccurences, unEntity, $};
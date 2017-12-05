function getFirstSelector(selector) {

    return document.querySelector(selector)
}

function nestedTarget() {

    return document.getElementById('div.nested').querySelectorAll('div.target')
}

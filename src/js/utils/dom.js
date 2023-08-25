export function findElemet(selector) {
    return document.querySelector(selector)
}

export function insertIntoHtml(element, html) {
    element.innerHTML = html
}



export function elementStyle(element, styleName, styleValue) {
    element.style[styleName] = styleValue
}
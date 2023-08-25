import { refs } from "./cats"
import { markupBreed } from "./markup"
import { insertIntoHtml } from "./utils"

export function renderBreeds(data) {
    if (!Array.isArray(data)) {
        return null
    }

    const html = [...data].map(item => markupBreed(item)).join("")

    insertIntoHtml(refs.selectBreed, html)
}

export function renderBreed(data) {
    const { url, breeds: [breed] } = data
    const {name, description, temperament} = breed
    
    const html = `
        <img src="${url}" alt="${name}" width=400/>
        <h2>${name}</h2>
        <p>${description}</p>
        <p>${temperament}</p>
    `

  insertIntoHtml(refs.cat_info, html);
}
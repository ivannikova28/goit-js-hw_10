export function markupBreed(breed) {
    const {id, name} = breed

    const html = `<option value="${id}">${name}</option>`
    return html
}
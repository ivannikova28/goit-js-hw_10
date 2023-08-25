import { Notify } from "notiflix";

import { catsService } from "./services";
import { elementStyle, findElemet, insertIntoHtml } from "./utils";
import { renderBreed, renderBreeds } from "./render";

export const refs = {
    selectBreed: findElemet('.breed-select'),
    loader: findElemet(".loader"),
    errors: findElemet(".error"),
    cat_info: findElemet('.cat-info'),
};


refs.selectBreed.addEventListener("change", (event) => {
    const { target } = event;
    const selectedId = target.value;
    insertIntoHtml(refs.cat_info, "");
    showBreed(selectedId);
})

handleShowLoader();
handleHiddenError();

export async function showBreeds() { 
    try {
        handleShowLoader()
        const { data } = await catsService.getBreeds();
        renderBreeds(data)
    } catch (error) {
        Notify.failure("Failed to fetch breeds");
        showError("Failed to fetch breeds")
    } finally { 
        handleHiddenLoader();
    }
}

export async function showBreed(breedId) { 
    try {
        handleShowLoader()
        const { data: [cat] } = await catsService.searchImages(breedId);
        renderBreed(cat)
    } catch (error) {
        Notify.failure("Failed to fetch breeds");
        showError("Failed to fetch breeds")
    } finally { 
        handleHiddenLoader();
    }
}

export function showError(message) {
    refs.errors.textContent = message;
    handleShowError();
    setTimeout(() => {
       handleHiddenError()
    }, 5000)
}



export function handleShowLoader() {
    elementStyle(refs.loader, "display", "block")
    elementStyle(refs.selectBreed, 'display', 'none');
}

export function handleHiddenLoader() {
    elementStyle(refs.loader, 'display', 'none');
    elementStyle(refs.selectBreed, 'display', 'block');
}
export function handleShowError() {
    elementStyle(refs.errors, "display", "block")
}
export function handleHiddenError() {
     elementStyle(refs.errors, 'display', 'none');
}

showBreeds()
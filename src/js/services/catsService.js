import { instanseAxios } from "./apiService";
import { urls } from "./api_constant";

const catsEndPoints = {
    breeds: urls.breeds,
    breedById: (id) => urls.searchImages(id)
}

export const catsService = {
  getBreeds: () => instanseAxios.get(catsEndPoints.breeds),
  searchImages: (breedId) => instanseAxios.get(catsEndPoints.breedById(breedId)),
};
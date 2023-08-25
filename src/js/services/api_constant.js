const baseURL = 'https://api.thecatapi.com/v1';
  
const breeds = "/breeds";
const images = "/images";


const urls = {
  breeds,
  searchImages: (breedId) => `${images}/search?breed_ids=${breedId}`,
};


export { 
    urls,
    baseURL
}
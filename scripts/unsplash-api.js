const API_KEY = "2JkAUN1vpfe6JNUuNhe61SDhMaZsUvkYaRfAC1MuSAM";

class PhotoApi {
  constructor(apiKey) {
    this.baseUrl = "https://api.unsplash.com";
    this.apiKey = apiKey;
  }

  async getPhotos(searchInput) {
    const response = await axios.get(`${this.baseUrl}/search/photos?query=${searchInput}&client_id=${this.apiKey}`)
    const photosReceived = response.data
    return photosReceived
  }

  async postPhotos(newPhoto) {
    const response = await axios.post(`${this.baseUrl}/photos?client_id=${this.apiKey}`, newPhoto)
    const postPhotos = response.data
    return postPhotos
  }
}

const unsplashPhotoApi = new PhotoApi(API_KEY)
export default unsplashPhotoApi;

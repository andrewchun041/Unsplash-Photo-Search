import unsplashPhotoApi from "./unsplash-api.js";

// console log the image object
async function fetchPhotos() {
  const response = await unsplashPhotoApi.getPhotos('dogs')
  console.log(response)
}
fetchPhotos()

// function for dom creation
function elementClassAppend(elementType, className, parentName){
    const newElement = document.createElement(elementType)
    newElement.classList.add(className)
    parentName.append(newElement)
    return newElement
}

// function for appending each picture from api to html as dom
async function appendPhoto(search) {
    const photoContainerEl = document.querySelector(".photo-container")
    const photosSet = await unsplashPhotoApi.getPhotos(search)
    // console.log(photosSet[0].urls)
    // for (let i=0;i<photosSet.length;i++){

    // }
    photoContainerEl.innerText=""
    photosSet.results.forEach(photo => {
        const newElement = document.createElement('img')
        newElement.classList.add('api-photo')
        newElement.src = photo.urls.raw
        photoContainerEl.append(newElement)
  })
}


const form = document.querySelector('.form')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.photoSearch.value)
    appendPhoto(event.target.photoSearch.value)

})



// var formEl = document.querySelector(".form");
// const photoSearchEl = document.querySelector(".photo-search")
// const photoContainerEl = document.querySelector(".photo-container")


// let searchInput = " "
// let page = 1

// const API_KEY = "2JkAUN1vpfe6JNUuNhe61SDhMaZsUvkYaRfAC1MuSAM"

// async function searchPhoto(){
//     searchInput = photoSearchEl.value
//     console.log(searchInput)
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${API_KEY}`
//     const response = await fetch(url)
//     const data = await response.json()

//     if (page === 1){
//         photoContainerEl.innerText = ""
//     }
//     let results = data.results
//     results.map((res) => {
//         // const createImgWapper = document.createElement("div");
//         // createImgWapper.classList.add("search__result");
//         const createImage = document.createElement("img");
//         createImage.src = res.urls.small;
//         createImage.alt = res.alt_description;
//         // const ImageLink = document.createElement("a");
//         // ImageLink.href = res.links.html;
//         // ImageLink.target = "_blank";
//         // ImageLink.textContent = res.alt_description;
//         photoContainerEl.appendChild(createImage);
//         // createImgWapper.appendChild(ImageLink);
//         // searchResultsEl.appendChild(createImgWapper);
//       })
//       page++
//     //   if (page > 1) {
//     //     document.getElementById("btns").style.display = "block";
//     //   }
// }

// // function showMoreBtn() {
// //     page++;
  
// // }

// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchPhoto();
//   });
// //   const btnI = document.getElementById("btns");
// //   btnI.addEventListener("click", (e) => {
// //     showMoreBtn();
// //     searchPhoto();
// //   });
  
let sampleData = [{
    url:"img/road.jpg",
    title:"Autumn Road",
    description:"Taken during the fall, somewhere in the backroads not too far from town."
},{
    url:"img/sea.jpg",
    title:"Seaside",
    description:"A pretty day on the beach, nothing like it."
}]

let currentImage = 0;
let data = [];
let target = document.getElementById("target")
let loaderGif = document.getElementById("loaderImage")
let title = document.getElementById("imageTitle")
let description = document.getElementById("imageDescription")

function load(input){
    data = input;
    updateImage()
}

function updateImage(){
    target.src = data[currentImage].url;
    loaderToggle()
    target.onload = (e)=>{
        title.innerHTML = data[currentImage].title
        description.innerHTML = data[currentImage].description
        loaderToggle()
    }
}

function loaderToggle(){
    loaderGif.classList.toggle('invisible')
}

function next(){
    currentImage++;
    updateImage()
}

function prev(){
    currentImage--;
    updateImage()
}

load(sampleData)


document.getElementById("upButton").onclick = (e)=>{
    e.preventDefault();
    next();
}

document.getElementById("downButton").onclick = (e)=>{
    e.preventDefault();
    prev();
}

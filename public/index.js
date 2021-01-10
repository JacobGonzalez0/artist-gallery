var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d")

function resizeCanvas(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

var testImage = new Image()
testImage.src = "img/road.jpg"
testImage.onload = ()=>{
    console.log("loaded")
    resizeCanvas()
    main()
}

function main(){
    //test

    context.drawImage(
        testImage,
        0,
        0,
        canvas.width,
        canvas.height
    )
}

document.addEventListener("resize",resizeCanvas)

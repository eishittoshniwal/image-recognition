Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#camera")
function capture() {
    Webcam.snap(
        function(picture) {
            document.getElementById("snapshot").innerHTML=`<img id="capture_image" src=${picture}>`
        }
    )
}
console.log("ml5 version= "+ml5.version)
//code for importing the model
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p7qt1_HBt/model.json",modelloaded)
function modelloaded() {
    console.log("Model has been loaded")
}
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
function identify() {
  img=document.getElementById("capture_image")
  classifier.classify(img,gotresults)
}
function gotresults(error,results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("objectresult").innerHTML=results[0].label
        document.getElementById("accuracyresult").innerHTML=results[0].confidence.toFixed(3)
    }
}
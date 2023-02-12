Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});


Webcam.attach("#webcam");

function snap(){
    Webcam.snap(function(url){
        document.getElementById("snapView").innerHTML = '<img id="capture_image" src="'+url+'" />'
    });
}

console.log("model version :", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GfvEm82oG/", modelloaded);

function modelloaded(){
    console.log("model is successfully loaded")
}

function compare(){
    img = document.getElementById("capture_image");
    classifier.classify(img, get_result());


}

function get_result(error, result){
    if(error){
        console.log(error);

    }
    else{
        console.log(result);
        document.getElementById("obj_name").innerHTML=result[0].label;
        document.getElementById("obj_accuracy").innerHTML=result[0].confidence.toFixed(3);   }


}







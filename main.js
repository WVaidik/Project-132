prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m_VotG920/model.json',modelLoaded);
//define function modelLoaded
function modelLoaded() {
    console.log("Model Loaded!")
}
//define function check() 
function check() {
img = document.getElementById('captured_image');
classifier.classify(img, gotResult)
}

//define function gotResult(error, results)
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    document.getElementById("result").innerHTML = results[0].label
    prediction_1 = results[0].label
    if(results[0].label == "Yo Hand Gesture") 
    {
        document.getElementById("status").innerHTML = "Yo Hand Gesture";
        document.getElementById("update_emoji").innerHTML = "&#129311;";
    }
    if(results[0].label == "One Finger") 
    {
        document.getElementById("status").innerHTML = "One Finger";
        document.getElementById("update_emoji").innerHTML = "&#128070;";
    }
    if(results[0].label == "Two Finger") 
    {
        document.getElementById("status").innerHTML = "Two Finger";
        document.getElementById("update_emoji").innerHTML = "&#129310;";
    }
    if(results[0].label == "Three Finger") 
    {
        document.getElementById("status").innerHTML = "Three Finger";
        document.getElementById("update_emoji").innerHTML = "&#128406;";
    }
    if(results[0].label == "Four Finger") 
    {
        document.getElementById("status").innerHTML = "Four Finger";
        document.getElementById("update_emoji").innerHTML = "&#128400;";
    }
    }
}
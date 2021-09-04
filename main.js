//https://teachablemachine.withgoogle.com/models/EDLnhOZ9X/
function preload() {
    sound = "";
    finalSound = "";
}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
}
function draw() {
}
//ml5.soundClassifier
//navigator.mediaDevices.getUserMedia({audio:true});  classifier.classify(audioVar, gotResult);

function start() {
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EDLnhOZ9X/model.json', modelLoaded);
    sound = navigator.mediaDevices.getUserMedia({audio:true});

}

function modelLoaded() {
   console.log('Model Loaded');
   classifier.classify(sound, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error();
    } else{
        console.log(results);
        finalSound = results[0].label;
        if(finalSound == "Background Noise") {
            document.getElementById('orange').src= "https://media.giphy.com/media/l2JJHEW1lToNnJzxe/giphy.gif?cid=790b761113cd9cd9014506ea64b14e7adcf9e122fa0d7a43&rid=giphy.gif&ct=g";
            document.getElementById('cherry').src= "cherry.png";
        }
        if(finalSound == "clapping") {
            document.getElementById('cherry').src = "https://media.giphy.com/media/3ornkbOjVuqWhB8GwE/giphy.gif?cid=790b7611a3a3dbd51e60f4ddbab3d69afa76a172bb9aa846&rid=giphy.gif&ct=g";
            document.getElementById('orange').src= "orange.png";
        }
    }
}
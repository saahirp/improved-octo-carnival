noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
    video.size(550, 510);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet has been Initialised!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X = " + noseX +" Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);   
    }
}

function draw(){
    background('#E8E8E8');
    fill("#5D8AA8");
    stroke("#000000");
    square(noseX, noseY, difference);
    document.getElementById("newspan").innerHTML = "The width and height of the square is = " + difference + " px.";
}


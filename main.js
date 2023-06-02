noseX=0;
noseY=0;
difference=0;
rightWristX=0;
rightWristY=0;

function setup()
{
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#F88379');
    fill(' #30D5C8 ');
    stroke('#FFFF00');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet is Initialiazed');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristy= results[0].pose.leftWrist.y;
        difference= floor(leftWristX- rightWristX);
console.log("leftWristX =" + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}




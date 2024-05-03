Xcoordinate = 40;
Ycoordinate = 200;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(450, 410);
    canvas.position(560, 120);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#49eb34");

    textSize(difference);
    fill("golden");
    text("Jordan", Xcoordinate, Ycoordinate);

    document.getElementById("square_side").innerHTML = "The Width And Height Of A Text Will Be = " + difference + "px";
}

function modelLoaded()
{
    console.log("Model Is Loaded! ^^");
}

function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}
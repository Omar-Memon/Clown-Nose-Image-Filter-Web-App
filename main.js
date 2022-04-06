noseX=0;
noseY=0;
function preload() {
    clown_nose = loadImage('clownnose.png')
}

function setup() {
    canvas = createCanvas(350,350);
    canvas.center();
   video = createCapture(VIDEO);
   video.size(350, 350);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function modelLoaded(){
console.log('PosNet is Initialized');
}
function draw(){
    image(video,0,0,350,350);
    fill(255,0,0)
    stroke(255,0,0)
    image(clown_nose, noseX, noseY, 30,30)
}

function take_picture() {
    save('Omar.png');
}
nose_x = 0;
nose_y = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', getposes);
}

function modelloaded() {
    console.log('Posenet is Intialized');
}

function getposes(results) {
    console.log("hi ");
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 30, 30);
}

function takesnapshot() {
    save('savemypic.jpg');
}
img="";
status="";
objects=[];

function preload(){
img=loadImage('luffy.jpg');
}

function setup(){
canvas=createCanvas(640,450);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}
function modelLoaded(){
    console.log("modelLoaded!!!");
    status=true;
    objectDetector.detect(img,gotresults);

    
}

function gotresults(error,results){
    if (error){
        console.log(error);

    }
  console.log(results);
}
function draw(){
image(img,0,0,640,450);
fill("#FF0000");
text("Monkey D.Luffy",80,75);
noFill();
stroke("#FF0000");
rect(80,60,450,500);
}
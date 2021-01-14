var video1;
var classif;
function preload(){
  //image1 = loadImage('image1.jpg');
  classif = ml5.objectDetector("yolo");
}
function setup() {
  createCanvas(650,720)
  //console.log(classif)
  video1 = createCapture(VIDEO);
  video1.size(650,720)
  video1.hide()
  
}
//console.log(ml5.version)
function draw() {
  image(video1,0,0)
  classif.detect(video1,gotresult);
  
  
}
function gotresult(error, result){
  if(error){
    console.error(error);
    return
  }
  //console.log(result)  
    for(let i = 0; i < result.length;i++){
      let object = result[i]
      noFill();
      noStroke();
      noFill();
      rect(object.x,object.y,object.width,object.height);
      noStroke();
      fill(0,255,0);
      textSize(30)
      text(object.label + object.confidence,object.x + 33,object.y + 33)
    }
    
}
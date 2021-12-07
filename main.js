function setup(){
    canvas=createCanvas(350,350);
    background("white");
    canvas.center();
}
function preload(){
    coin=ml5.imageClassifier("DoodleNet");
}
function clearcanvas(){
    background("white");
}
function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);

    }
}
function compare(){
bank.classify(canvas,gotresults);
}
function gotresults(error,results){
  if(error){
      console.log(error);
  }
  else{
      console.log(results);
      document.getElementById("p1").innerHTML="object- "+results[0].label;
      document.getElementById("p2").innerHTML="accuracy- "+Math.round(results[0].confidence*100)+"%";
      mot=new SpeechSynthesisUtterance(results[0].label);
      set.speak(mot);
  }
}
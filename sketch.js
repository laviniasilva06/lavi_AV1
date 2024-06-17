function setup() {
    createCanvas(900, 800);
     background("black");
    
  }
  
 function draw() {
   
   stroke("blue");
   fill("pink");
   
    if(mouseIsPressed){
      circle(mouseX, mouseY, 30, 30);
    }
 }
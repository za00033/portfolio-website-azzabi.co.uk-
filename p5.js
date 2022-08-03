

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent('p5can');
    
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 10, 10);
}
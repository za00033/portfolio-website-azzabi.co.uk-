

function setup(){
    var canvas = createCanvas(384, 90);
    canvas.parent('p5scan');
    
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 10, 10);
}
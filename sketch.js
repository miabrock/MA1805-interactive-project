 let i = 0;

function setup() {
  createCanvas(1450, 815);
}

function draw() {
  background(100, 100, 225);

  fill(100, 100, 0);
  circle(450, i, 150, 150);
  circle(950, i, 150, 150);

  fill(255, 25, 0, 40);
  rect(i, 500, i, 60);

  i = i+1;
}
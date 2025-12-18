 let i = 0;

function setup() {
  createCanvas(1460, 815);
}

function draw() {
  background(255, 199, 113);

  //circle
  
  fill(49, 26, 100);
  circle(450, i, 150, 150);
  circle(950, i, 150, 150);


  //rectangle 

  fill(255, 25, 0, 40);
  rect(i, 500, i, 60);

  i = i+1;
}
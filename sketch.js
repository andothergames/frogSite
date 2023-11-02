function setup() {
  let myCanvas1 = createCanvas(400, 360);
  myCanvas1.parent('myFrog');
}



let eyeSize = 60




function draw() {
    noStroke();
  background("#f0c7ee");

  
//head
  
    fill("#7eedd7");
  rect (150, 100, 100, 200)
   arc(150, 200, 180, 200, radians(90), radians(270));
  arc(250, 200, 180, 200, radians(270), radians(90));

  
 
//eyes
    fill("#7eedd7");
  ellipse (135, 80, 80)
  ellipse (265, 80, 80)
    fill("#f8ff24");
  drawEye2 (135, 80, eyeSize)
  drawEye2 (265, 80, eyeSize)
    fill("#000");
  drawEye (135, 80, eyeSize)
  drawEye (265, 80, eyeSize)
  

  
  //lowerHead
  
    fill("#f8ff24");
  rect (150, 200, 100, 100)
  arc(150, 200, 180, 200, radians(90), radians(180));
  arc(250, 200, 180, 200, radians(0), radians(90));
  bezier(130, 200, 180, 170, 220, 170, 270, 200);
  

//nostrils
  fill("#000");
  ellipse (185, 140, 8)
  ellipse (215, 140, 8)
  
//------------------------
  
function drawEye(x, y) {

		let distance = dist(x, y, mouseX, mouseY);
		let eyeSize = distance/10;

		if (eyeSize > 50) {
				eyeSize = 50;
		}
		
		fill("#000");
		ellipse(x, y, eyeSize, eyeSize);
}
  
  function drawEye2(x, y) {

		let distance = dist(x, y, mouseY, mouseX);
		let eyeSize = distance/5;

		if (eyeSize > 70) {
				eyeSize = 70;
		}
		
		fill("#f8ff24");
		ellipse(x, y, eyeSize, eyeSize);
}
  
  
}
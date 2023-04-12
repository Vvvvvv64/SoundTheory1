//songs
var sadSong;
var danceSong;
var happySong;
var depSong;
var angSong;

//buttons
var sButton;
var daButton;
var hButton;
var angButton;
var depButton;
var jumpButton;

//extra variables
let angle = 0 ;
let value=0;
var range
var Xrange;
var Yrange;
var Zrange;



//

function setup() {
  
  createCanvas(800, 800);
  angleMode(DEGREES);
  
  
  //MUSIC
  sadSong = loadSound("sunshine.mp3",loaded);
  danceSong = loadSound("rwy.mp3",loaded);
  happySong = loadSound("after-school.mp3",loaded);
  depSong = loadSound("hots.mp3",loaded);
  angSong = loadSound("popular-monster.mp3",loaded);
 
  
  //Buttons
  sButton = createButton ("SAD");
  sButton.mouseClicked(togglePlaying);
  
  daButton = createButton ("DANCE");
  daButton.mouseClicked(daTogglePlaying);
  
  hButton = createButton ("HAPPY");
  hButton.mouseClicked(hpTogglePlaying);
  
  depButton = createButton ("DEPRESSED");
  depButton.mouseClicked(dpTogglePlaying);
  
   angButton = createButton ("ANGER");
  angButton.mouseClicked(angTogglePlaying);
   
  
  
  
   amp = new p5.Amplitude();
}

//
function draw() {
  
  
  //MOUSEPRESSED FUNCTION
/* if (mouseIsPressed==true){  
  
  background("#ffffff03")

 stroke(random(vol), random(mouseX), random(mouseY));
 strokeWeight(55);
 point(mouseX-5, mouseY-5);
 point(mouseX*-1+800, mouseY-5);
 point(mouseX*-1+800, mouseY*-1+450);  
// point(mouseX-5, mouseY*-1+400);
 
  point(mouseX-5, mouseY-5);
 point(mouseX*-1+400, mouseY-5);
 point(mouseX*-1+400, mouseY*-1+450);  
 point(mouseX-5, mouseY*-1+450);
 
 point(mouseX-5, mouseY-5);
 point(mouseX*-1+800, mouseY-5);
 point(mouseX*-1+800, mouseY*-1+450);  
 point(mouseX-5, mouseY*-1+450);
 
} 
  */
  
  
//BoomBox Speakers 
   var vol = amp.getLevel();
 
  translate(150, 150)
   strokeWeight(1)
  stroke(0);
  fill((vol*Xrange),(vol*Yrange), (vol*Zrange));
  ellipse(245,245,250,250);
  
  //upper
  fill  (random(vol*Xrange),random(vol*Yrange), random(vol*Zrange));
  ellipse(75,75,vol*700,vol*700);

 fill((vol*Xrange),(vol*Yrange), (vol*Zrange)); ellipse(250,25,vol*800,vol*800);
  
  
  fill (random(vol*Xrange),random(vol*Yrange), random(vol*Zrange));
  ellipse(425,75,vol*700,vol*700);
  
  //middle
  fill((vol*Xrange),(vol*Yrange), (vol*Zrange));
  ellipse(25,250,vol*800,vol*800);
  
   fill ((vol*Xrange),(vol*Yrange), (vol*Zrange));
   ellipse(245,245,vol*500,vol*500);
  
  fill((vol*Xrange),(vol*Yrange), (vol*Zrange));
  ellipse(450,250,vol*800,vol*800);
  
  //down
  fill (random(vol*Xrange),random(vol*Yrange), random(vol*Zrange));
 ellipse(75,400,vol*700,vol*700);  
  
   fill((vol*Xrange),(vol*Yrange), (vol*Zrange));  ellipse(250,450,vol*800,vol*800);
  
  fill (random(vol*Xrange),random(vol*Yrange), random(vol*Zrange));
  ellipse(425,400,vol*700,vol*700);
  

   
  console.log(vol);
  
angle = angle + 1
  
  

}




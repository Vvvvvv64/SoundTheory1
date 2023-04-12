

//SAD 
function togglePlaying(){
  if(!sadSong.isPlaying()) {
   sadSong.play(); 
  sadSong.setVolume(1); 
    sButton.html("pause");
     Xrange = 1;
    Yrange = 1;
    Zrange = 420;
    background(100)
    
    
    
  } else { 
    sadSong.stop();
   sButton.html("SAD");  
  }  
}
// DANCING
function daTogglePlaying(){
  if(!danceSong.isPlaying()) {
   danceSong.play(); 
  danceSong.setVolume(1); 
    daButton.html("pause");
     Xrange = 2190;
    Yrange = 92;
    Zrange = 1190;
    background(219, 92, 129)
    
  } else { 
    danceSong.stop();         daButton.html("DANCE");
  }
}

//HAPPY

function hpTogglePlaying(){
  if(!happySong.isPlaying()) {
   happySong.play(); 
  happySong.setVolume(1); 
    hButton.html("pause");
     Xrange = 2300;
    Yrange = 2010;
    Zrange = 200 ;
    background(230,201,50)
    
    
  } else { 
    happySong.stop();
    
          hButton.html("HAPPY");
  }
}

// DEPRESSED
function dpTogglePlaying(){
  if(!depSong.isPlaying()) {
   depSong.play(); 
  depSong.setVolume(1); 
    depButton.html("pause");
     Xrange = 200;
    Yrange = 200;
    Zrange = 200;
    
    background(200)
    
  } else { 
    depSong.stop();
    
          depButton.html("DEPRESSED");
  }
}

//ANGER

function angTogglePlaying(){

  
  if(!angSong.isPlaying()) {
   angSong.play(); 
  angSong.setVolume(1); 
    angButton.html("pause")
     Xrange = 500;
    Yrange = 0;
    Zrange = 0;
    background(0)
    
  } else { 
    angSong.stop();         angButton.html("ANGER");
  }
}











  function loaded(){
console.log("loaded");

}
 //
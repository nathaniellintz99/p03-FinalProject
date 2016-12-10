// Nathaniel Lintz: Project 3

//soundcloud embed urls, did not use s.c. api because it gave me errors I could not figure out so stuck with the automated sc embeding
var song1 = {url:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265040990&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true", songTitle:"Back Where I Belong" };
var url = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265040990&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160263594&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true",
"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136515969&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
];
var song = ["Back Where I Belong", "Feel The Volume", "Miami 82 (Kygo Remix)"];
var songPage = ["https://soundcloud.com/otto-knows/otto-knows-ft-avicii-back-where-i-belong", "https://soundcloud.com/jauzofficial/feelthevolume", "https://soundcloud.com/kygo/syn-cole-miami-82-kygo-remix"];
var artist = ["Otto Knows ft. Avicii", "Jauz", "Syn Cole"];
var artistPage = ["https://soundcloud.com/otto-knows", "https://soundcloud.com/jauzofficial", "https://soundcloud.com/kygo"];
var i = 2;

function loadSong(){
  document.getElementById("myFrame").src = url[i];
  document.getElementById("song").innerHTML = song[i];
  document.getElementById("songPage").href = songPage[i];
  document.getElementById("artist").innerHTML = artist[i];
  document.getElementById("artistPage").href = artistPage[i];
}
function songList(){
  document.getElementById("myFrame0").src = url[0];
  document.getElementById("myFrame1").src = url[1];
  document.getElementById("myFrame2").src = url[2];
}


var questionA = [];

function checkA(){
  questionA[0] = "A";
  document.getElementById("verdictA").classList.add("button1True");
  document.getElementById("verdictB").classList.remove("button1");
}
function checkB(){
  questionA[0] = "B";
  document.getElementById("verdictB").classList.add("button1True");
  document.getElementById("verdictBd").classList.remove("button1");
}


function addStyle(){
  if(document.getElementById('buttonA').clicked == false || document.getElementById('buttonB').clicked == false){
  }
}

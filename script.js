// Nathaniel Lintz: Project 3

window.onload = storeSongs;
// Global variables..
var song=[], songPage=[], artist=[], artistPage=[], embed=[];

function storeSongs(){
  song = ["Back Where I Belong", "Feel The Volume", "Miami 82 (Kygo Remix)"];
  songPage = ["https://soundcloud.com/otto-knows/otto-knows-ft-avicii-back-where-i-belong", "https://soundcloud.com/jauzofficial/feelthevolume", "https://soundcloud.com/kygo/syn-cole-miami-82-kygo-remix"];
  artist = ["Otto Knows ft. Avicii", "Jauz", "Syn Cole"];
  artistPage = ["https://soundcloud.com/otto-knows", "https://soundcloud.com/jauzofficial", "https://soundcloud.com/kygo"];
  embed = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265040990&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160263594&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136515969&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"];

}
function loadResults(){
  var i = getCookie("quiz");
  if(i){
  document.getElementById("myFrame").src = embed[i];
  document.getElementById("song").innerHTML = song[i];
  document.getElementById("songPage").href = songPage[i];
  document.getElementById("artist").innerHTML = artist[i];
  document.getElementById("artistPage").href = artistPage[i];
  }
}

function loadList(){
  for (var i = 0; i < song.length; i++){
    document.getElementById("myFrame" + i).src = embed[i];
    document.getElementById("song" + i).innerHTML = song[i];
    document.getElementById("songPage" + i).href = songPage[i];
    document.getElementById("artist" + i).innerHTML = artist[i];
    document.getElementById("artistPage" + i).href = artistPage[i];
  }
}
function check(){
    var x1 = document.getElementById("q1");
    var x2 = document.getElementById("q2");
    var x3 = document.getElementById("q3");
    var x4 = document.getElementById("q4");
    var x5 = document.getElementById("q5");
    var x6 = document.getElementById("q6");
    if(x1.checked == true && x2.checked == true && x3.checked == true && x4.checked == true &&x5.checked == true && x6.checked == true){
      var a1 = document.getElementById("q1").value;
      var a2 = document.getElementById("q2").value;
      var a3 = document.getElementById("q3").value;
      var a4 = document.getElementById("q4").value;
      var a5 = document.getElementById("q5").value;
      var a6 = document.getElementById("q6").value;
      if(a1.value == "energy" && a5.value=="stargaze"){
        document.getElementById("go").classList.remove("visibility");
        songNumber = 2;
        setCookie("quiz", songNumber, 7);
      }
    }
    else{
      window.alert("Make sure you answered all the questions!");
    }
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

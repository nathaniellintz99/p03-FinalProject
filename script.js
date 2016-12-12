// Nathaniel Lintz: Project 3

window.onload = storeSongs;
// Global variables..
var quiz, song=[], songPage=[], artist=[], artistPage=[], embed=[];

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
  var i = 2;
  document.getElementById("myFrame").src = embed[i];
  document.getElementById("song").innerHTML = song[i];
  document.getElementById("songPage").href = songPage[i];
  document.getElementById("artist").innerHTML = artist[i];
  document.getElementById("artistPage").href = artistPage[i];
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
    var answers = document.getElementById("q1");
    x.checked = true;


    window.location = 'results.html';
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
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

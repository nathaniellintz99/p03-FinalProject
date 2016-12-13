// Nathaniel Lintz: Project 3

window.onload = storeSongs;
// Global variables..
var song=[], songPage=[], artist=[], artistPage=[], embed=[];

function storeSongs(){
  song = ["Back Where I Belong", "Feel The Volume", "Miami 82 (Kygo Remix)", "D.A.N.C.E.", "Gorilla (ft. Luciana)", "Language (Jauz Remix)"];
  songPage = ["https://soundcloud.com/otto-knows/otto-knows-ft-avicii-back-where-i-belong", "https://soundcloud.com/jauzofficial/feelthevolume", "https://soundcloud.com/kygo/syn-cole-miami-82-kygo-remix", "https://soundcloud.com/edbangerrecords/justice-d-a-n-c-e", "https://soundcloud.com/spinninrecords/will-sparks-tyron-hapi-luciana-gorilla", "https://soundcloud.com/jauzofficial/language"];
  artist = ["Otto Knows ft. Avicii", "Jauz", "Syn Cole", "Justice", "Will Sparks, Tyron Hapi", "Porter Robinson"];
  artistPage = ["https://soundcloud.com/otto-knows", "https://soundcloud.com/jauzofficial", "https://soundcloud.com/kygo", "https://www.facebook.com/etjusticepourtous", "https://soundcloud.com/willsparks", "https://soundcloud.com/porter-robinson"];
  embed = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265040990&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160263594&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136515969&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/18561928&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/290818683&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293730846&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"];

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
  for (var i = 0; i < 7; i++){
    document.getElementById("myFrame" + i).src = embed[i];
    document.getElementById("song" + i).innerHTML = song[i];
    document.getElementById("songPage" + i).href = songPage[i];
    document.getElementById("artist" + i).innerHTML = artist[i];
    document.getElementById("artistPage" + i).href = artistPage[i];
  }
}
function check(){
    eraseCookie("quiz");
    var x1 = document.getElementById("q1");
    var x2 = document.getElementById("q2");
    var x3 = document.getElementById("q3");
    var x4 = document.getElementById("q4");
    var x5 = document.getElementById("q5");
    var x6 = document.getElementById("q6");
    var x1a = document.getElementById("q1a");
    var x2a = document.getElementById("q2a");
    var x3a = document.getElementById("q3a");
    var x4a = document.getElementById("q4a");
    var x5a = document.getElementById("q5a");
    var x6a = document.getElementById("q6a");
    if(x1.checked == true || x1a.checked == true && x2.checked == true || x2a.checked == true && x3.checked == true || x3a.checked == true)
      if(x4.checked == true || x4a.checked == true && x5.checked == true || x5a.checked == true && x6.checked == true || x6a.checked == true){
// did not put input all the logic to pick a song for user
// (lack of time)
        Math.floor((Math.random()*(0-5+1))+0);
        document.getElementById("go").classList.remove('visibility');
        setCookie("quiz", songNumber, 7);
        console.log(getCookie("quiz"));
    }
    else{}
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
function eraseCookie(name) {
	setCookie(name,"",-1);
}

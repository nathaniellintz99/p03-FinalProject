// Nathaniel Lintz: Project 3

SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

var track_url = 'https://soundcloud.com/search?q=flume%20tennis%20court';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});








function addItem1(){
  var itemArr = [];
  var input = document.getElementById("input").value;
  myArray.push(input);
}
function colorArray(){
  var colorArr = [];
  myArray.push()
}
function compare(){
  if(){
    document.getElementById("verdict").classList.add("show1");
    document.getElementById("verdict").classList.remove("hide");
  }
  if(){
    document.getElementById("verdict").classList.add("show2");
    document.getElementById("verdict").classList.remove("hide");
  }
}
